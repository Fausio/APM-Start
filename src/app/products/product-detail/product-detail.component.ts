import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from 'src/app/interfaces/product/product';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = "Product detail"
  product: Iproduct | undefined;

  constructor(private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {

    const id = Number(this.route.snapshot.paramMap.get('id'));
    //this.product.productName ="boll";
    this.pageTitle = this.pageTitle + ` - ${id}`;
  }

  OnBack(): void {

    this.router.navigate(['/products']);

  }
}
