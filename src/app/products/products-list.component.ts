import { Component } from "@angular/core";

@Component({
    selector: "mp-productList",
    templateUrl: './products-list.component.html'
})

export class ProductListComponent {
    pageTitle: string = "Product List 👽";

    imgWidth: number = 50;
    imgMargin: number = 5; 
    imgShow: boolean = false;
    btnShowImg: string = "Show";

    filterLabel: string = "somethingHere";

    producList: any[] = [
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
    ];


    toggleImage(): void{

        this.imgShow =  !this.imgShow; 
        this.imgShow  ? this.btnShowImg = "Hide" : this.btnShowImg = "Show" ;

    }

}