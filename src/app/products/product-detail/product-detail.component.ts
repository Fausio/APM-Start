import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from 'src/app/interfaces/product/product';
import { productService } from 'src/app/services/product/product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = "Product detail";
  product: Iproduct | undefined;
  id: number = 0;
  errorMessage: string = " " ;
  constructor(private route: ActivatedRoute, private router: Router, private productservices: productService) {

  }

  ngOnInit(): void {

    const id = Number(this.route.snapshot.paramMap.get('id'));
 
    this.pageTitle = this.pageTitle + ` - ${id}`;

    if (id) {
      this.getProduct(id);
    }
  }

  getProduct(id: number): void {
    this.productservices.getProductByID(id).subscribe({
      next: product => this.product = product,
      error: err => this.errorMessage = err
    });
  }

  OnBack(): void {

    this.router.navigate(['/products']);

  }
}
