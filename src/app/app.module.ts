import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MissionaryService } from './services/missionary.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { StatementComponent } from './statement/statement.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchResultsComponent,
    StatementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MissionaryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
