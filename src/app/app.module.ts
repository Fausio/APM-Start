import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/products-list.component';
import { FormsModule } from '@angular/forms';
import { convertToSpacespipe } from './shared/pipes/convert-to-spaces.pipe';

@NgModule({
            declarations: [  AppComponent ,ProductListComponent ,convertToSpacespipe ], 
            imports: [  BrowserModule,FormsModule ],
            bootstrap: [AppComponent]
})

export class AppModule { }
