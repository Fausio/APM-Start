import { Component } from "@angular/core";

@Component({
    selector: "mp-productList",
    templateUrl: './products-list.component.html'
})

export class ProductListComponent {
    pageTitle: string = "Product List 😁";

    producList: any[] = [
        {

            "ProductId": 2,
            "ProductName": "Garden car",
            "ProductCode": "GTN-SDW",
            "ReleaseDate": "March 18, 2021",
            "Description": "15 gallon capacity",
            "Price": 34.5,
            "StarRating": 4.2,
            "ImageUrl": "Assets/images/carden_cart.png",
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
            "ImageUrl": "Assets/images/hummer.png",
            "Available": false
        }
    ];

}