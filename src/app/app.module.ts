import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products//products-list/products-list.component';
import { convertToSpacespipe } from './shared/pipes/convert-to-spaces.pipe';
import { StarComponent } from './shared/components/star/star.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';
import { NotFoundPathComponent } from './Error/not-found-path/not-found-path.component';
import { NavbarComponent } from './shared/nav-bar/navbar/navbar.component';
import { ProductDetailGuard } from './guard/product/product-detail-guard/product-detail-guard';



@NgModule({
    declarations: [AppComponent,
        StarComponent,
        ProductListComponent,
        convertToSpacespipe,
        ProductDetailComponent,
        WelcomeComponent,
        NotFoundPathComponent,
        NavbarComponent],

    imports: [BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot([

            { path: '', redirectTo: 'welcome', pathMatch: 'full' },
            { path: 'welcome', component: WelcomeComponent },
            { path: 'products', component: ProductListComponent },
            { path: 'product/:id', canActivate: [ProductDetailGuard], component: ProductDetailComponent },

            { path: '**', component: NotFoundPathComponent }
        ])

    ],

    bootstrap: [AppComponent]
})

export class AppModule {


}
