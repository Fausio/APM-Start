import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { Iproduct } from "src/app/interfaces/product/product";
import { catchError, tap } from 'rxjs/operators'

@Injectable({
    providedIn: 'root'
})
export class productService {

    private productListUrl = 'api/products/products.json';
    constructor(private http: HttpClient) {

    }

    getProduct(): Observable<Iproduct[]> {

        return this.http.get<Iproduct[]>(this.productListUrl).pipe(
            tap(data => console.log('All: ', JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    private handleError(err: HttpErrorResponse) {

        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage = '';

        if (err.error instanceof ErrorEvent) {
            // a client-side or network occurred. handle it accordingley.
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {

            // the backend returned an unsuccessful response code.
            // the response body may contain clues as to what went wrong,
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`
        }

        console.error(errorMessage);
        return throwError(errorMessage);

    }
}


