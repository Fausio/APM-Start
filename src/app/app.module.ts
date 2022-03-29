import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products//products-list/products-list.component';

import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';
import { NotFoundPathComponent } from './Error/not-found-path/not-found-path.component';
import { NavbarComponent } from './shared/nav-bar/navbar/navbar.component';
import { ProductDetailGuard } from './guard/product/product-detail-guard/product-detail-guard';
import { ProductModule } from './modules/product/product.module';
import { SharedModule } from './modules/shared/shared.module';
import { TemplateDrivenComponent } from './components/template-driven/template-driven.component';
import { ReactiveComponent } from './components/reactive/reactive.component';



@NgModule({
    declarations: [AppComponent,
        
        
        WelcomeComponent,
        NotFoundPathComponent,
        NavbarComponent,
        TemplateDrivenComponent,
        ReactiveComponent],

    imports: [
        BrowserModule, 
        HttpClientModule,
        RouterModule.forRoot([

            { path: '', redirectTo: 'welcome', pathMatch: 'full' },
            { path: 'welcome', component: WelcomeComponent },
            { path: 'driven', component: TemplateDrivenComponent },
            { path: 'reactive', component: ReactiveComponent },
         
            { path: '**', component: NotFoundPathComponent }
        ]),
        ProductModule,
        SharedModule

    ],

    bootstrap: [AppComponent]
})

export class AppModule {


}
