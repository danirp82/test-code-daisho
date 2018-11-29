import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { User } from 'src/app/shared/models/user';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const users: User[] = JSON.parse(localStorage.getItem('users')) || [];


        return of(null).pipe(mergeMap(() => {

            // authenticate
            if (request.url.endsWith('/users/authenticate') && request.method === 'POST') {

                const filteredUsers = users.filter(user => {

                    return (user.userName === request.body.userName || user.email === request.body.userName)
                            && user.password === request.body.password;
                });

                if (filteredUsers.length) {

                    const user = filteredUsers[0];
                    const body = {
                        userName: user.userName,
                        token: `${user.userName}-fake-token-${user.role}`
                    };

                    return of(new HttpResponse({ status: 200, body: body }));
                } else {
                    return throwError({ error: { message: 'Username or password is incorrect' } });
                }
            }

            // register user
            if (request.url.endsWith('/users/register') && request.method === 'POST') {
                // get new user object from post body
                const newUser: User = request.body;

                // validation
                const duplicateUser = users.filter(user =>  user.userName === newUser.userName ).length;
                if (duplicateUser) {
                    return throwError({ error: { message: 'Username "' + newUser.userName + '" is already taken' } });
                }

                // save new user
                newUser.id = users.length + 1;
                newUser.role = 'ADMINISTRATOR';

                users.push(newUser);
                localStorage.setItem('users', JSON.stringify(users));

                // respond 200 OK
                return of(new HttpResponse({ status: 200 }));
            }

            return next.handle(request);

        }));
    }
}

export let fakeBackendProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};
