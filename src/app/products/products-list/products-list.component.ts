
import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Iproduct } from "src/app/interfaces/product/product";
import { productService } from "src/app/services/product/product.service";
 

@Component({
    selector: "mp-productList",
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css'],

})

export class ProductListComponent implements OnInit, OnDestroy {


    constructor(private providers: productService) {

    }


    pageTitle: string = "Product List 👽";

    imgWidth: number = 50;
    imgMargin: number = 5;
    imgShow: boolean = false;
    btnShowImg: string = "Show";
    sub!: Subscription;

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
    ErrorMessage: any;

    toggleImage(): void {

        this.imgShow = !this.imgShow;
        this.imgShow ? this.btnShowImg = "Hide" : this.btnShowImg = "Show";

    }

    ngOnInit(): void {

        this.sub = this.providers.getProduct().subscribe({
            next: products => {

                this.producList = products
                this.producListFiltered = this.producList;
            },
            error: err => this.ErrorMessage = err 
        });


    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

    PerformFilter(value: string): Iproduct[] {

        value = value.toLocaleLowerCase();
        return this.producList.filter((P: Iproduct) => P.productName.toLocaleLowerCase().includes(value));
    }


    OnnotifyClicked(value: string): void {

        console.log(value);
    }


}