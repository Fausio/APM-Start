import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StarComponent } from 'src/app/shared/components/star/star.component';



@NgModule({
  declarations: [StarComponent],
  imports: [
    CommonModule
  ]
  ,
  exports: [
    CommonModule,
    FormsModule,
    StarComponent

  ]

})

export class SharedModule { }
