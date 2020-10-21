import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HomeComponent } from './home/home.component';
import { StatementComponent } from './statement/statement.component';
import { MissionariesModule } from './modules/missionaries/missionaries.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StatementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MissionariesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
