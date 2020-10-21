import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MissionaryDbComponent } from './missionary-db/missionary-db.component';



@NgModule({
  declarations: [MissionaryDbComponent],
  imports: [
    CommonModule, HttpClientModule
  ],
  exports: [MissionaryDbComponent]
})
export class MissionariesModule { }
