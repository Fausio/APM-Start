import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/products-list.component';
import { FormsModule } from '@angular/forms';
import { convertToSpacespipe } from './shared/pipes/convert-to-spaces.pipe';
import { StarComponent } from './shared/components/star/star.component';
import { productService } from './services/product/product.service';

@NgModule({
            declarations: [  AppComponent ,StarComponent, ProductListComponent,convertToSpacespipe ], 
            imports: [  BrowserModule,FormsModule ],
            bootstrap: [AppComponent] 
})          

export class AppModule { }
