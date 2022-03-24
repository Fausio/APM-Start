import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { Iproduct } from "src/app/interfaces/product/product";
import { catchError, map, tap } from 'rxjs/operators'

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

    // Get one product
    // Since we are working with a json file, we can only retrieve all products
    // So retrieve all products and then find the one we want using 'map'
    getProductByID(id: number): Observable<Iproduct | undefined> {
        return this.getProduct()
            .pipe(
                map((products: Iproduct[]) => products.find(p => p.productId === id))
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


