import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { MissionaryComponent } from './missionary/missionary.component';
import { MissionaryConfigComponent } from './missionary-config/missionary-config.component';
import { HomeComponent } from './home/home.component';
import { StatementComponent } from './statement/statement.component';
import { MissionariesModule } from './modules/missionaries/missionaries.module';
import { SearchService } from './service/search.service';
import { ResultsComponent } from './modules/missionaries/components/results/results.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './service/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    MissionaryComponent,
    MissionaryConfigComponent,
    HomeComponent,
    StatementComponent,
    ResultsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MissionariesModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [SearchService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
