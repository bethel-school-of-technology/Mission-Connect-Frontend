import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { StatementComponent } from './statement/statement.component';

const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent, //has <router-outlet> to load statement and search results
    children: [
      {
        path: 'statement',
        component: StatementComponent
      },
      {
        path: 'results', 
        component: SearchResultsComponent
      },
      {
        path: '',
        component: StatementComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
