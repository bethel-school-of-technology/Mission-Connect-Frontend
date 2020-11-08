import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MissionaryComponent } from './missionary/missionary.component';
import { MissionaryConfigComponent } from './missionary-config/missionary-config.component';
import { HomeComponent } from './home/home.component';
import { StatementComponent } from './statement/statement.component';
import { MissionariesModule } from './modules/missionaries/missionaries.module';
import { ResultsComponent } from './modules/missionaries/components/results/results.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchService } from './service/search.service';
>>>>>>> dev

@NgModule({
  declarations: [
    AppComponent,
    MissionaryComponent,
    MissionaryConfigComponent,
    HomeComponent,
    StatementComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MissionariesModule,
    ReactiveFormsModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
