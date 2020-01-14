import {
    HttpInterceptor, HttpRequest, HttpHandler, HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ):Observable<HttpEvent<any>> {
        const cloneReq = req.clone({
        //    params: req.params.set(
        //     "Authorization", 
        //     "Basic YWRtaW5BdXRoOnZpc2h1QDE5OTI="
        //    ) 

        setHeaders: {
            Authorization: 'Basic YWRtaW5BdXRoOnZpc2h1QDE5OTI='
          }

        });
        return next.handle(cloneReq);
    }
}