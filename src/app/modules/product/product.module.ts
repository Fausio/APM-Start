import { NgModule } from '@angular/core'; 
import { ProductDetailComponent } from 'src/app/products/product-detail/product-detail.component';
import { ProductListComponent } from 'src/app/products/products-list/products-list.component';
import { convertToSpacespipe } from 'src/app/shared/pipes/convert-to-spaces.pipe'; 
 
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from 'src/app/guard/product/product-detail-guard/product-detail-guard';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [ProductDetailComponent,
    ProductListComponent,
    convertToSpacespipe,
                       ],

  imports: [  
    SharedModule,
    RouterModule.forChild([

      { path: 'products', component: ProductListComponent },
      { path: 'product/:id', canActivate: [ProductDetailGuard], component: ProductDetailComponent },

    ])
  ]

})
export class ProductModule { }
