 
import { Component } from "@angular/core";

@Component({

          selector:"pm-root",
          template: 
                        `<div>
                                <h1>{{PageTitle}}</h1>
                                <mp-productList> </mp-productList>  
                               
                        </div>`

}) 

export class AppComponent{

  PageTitle: String = "Angular App";  

}