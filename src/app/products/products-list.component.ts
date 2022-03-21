
import { Component, OnInit } from "@angular/core";
import { Iproduct } from "../interfaces/product/product";
import { productService } from "../services/product/product.service";

@Component({
    selector: "mp-productList",
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css'],

})

export class ProductListComponent implements OnInit {


    constructor(private providers: productService) {

    }

    pageTitle: string = "Product List 👽";

    imgWidth: number = 50;
    imgMargin: number = 5;
    imgShow: boolean = false;
    btnShowImg: string = "Show";

    private _filterLabel: string = "";
    get filterLabel(): string {

        return this._filterLabel;
    }
    set filterLabel(value: string) {

        this._filterLabel = value;
        console.log("in setter:", value);
        this.producListFiltered = this.PerformFilter(value);
    }


    producListFiltered: Iproduct[] = [];

    producList: Iproduct[] = [];


    toggleImage(): void {

        this.imgShow = !this.imgShow;
        this.imgShow ? this.btnShowImg = "Hide" : this.btnShowImg = "Show";

    }

    ngOnInit(): void {
        this.producList = this.providers.getProduct();
         this.producListFiltered =  this.producList ;
    }

    PerformFilter(value: string): Iproduct[] {

        value = value.toLocaleLowerCase();
        return this.producList.filter((P: Iproduct) => P.ProductName.toLocaleLowerCase().includes(value));
    }


    OnnotifyClicked(value: string): void {

        console.log(value);
    }


}