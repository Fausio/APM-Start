import { Injectable } from "@angular/core"; 
import { Iproduct } from "src/app/interfaces/product/product";

@Injectable({
    providedIn: 'root'
})
export class productService{

    getProduct(): Iproduct[] {

        return [ 
            {

                "ProductId": 2,
                "ProductName": "Garden car",
                "ProductCode": "GTN-SDW",
                "ReleaseDate": "March 18, 2021",
                "Description": "15 gallon capacity",
                "Price": 34.5,
                "StarRating": 4.2,
                "ImageUrl": "assets/images/garden_cart.png",
                "Available": true
            }
            ,
            {
    
                "ProductId": 4,
                "ProductName": "Hummer",
                "ProductCode": "SMK-KUR",
                "ReleaseDate": "May 20, 2021",
                "Description": "15 gallon capacity",
                "Price": 56.5,
                "StarRating": 3.2,
                "ImageUrl": "assets/images/hammer.png",
                "Available": false
            }
         ]
    }
}