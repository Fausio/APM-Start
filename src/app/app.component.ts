 
import { Component } from "@angular/core";

@Component({

          selector:"pm-root",
          template: 
                        `
                        <pm-navbar></pm-navbar>

                        <div class="container">
                        <router-outlet> </router-outlet>
                        </div>
                       
                        `

}) 

export class AppComponent{

  PageTitle: String = "Angular App";  

}