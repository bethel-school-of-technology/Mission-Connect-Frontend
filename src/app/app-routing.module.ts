import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MissionaryDbComponent } from './modules/missionaries/components/missionary-db/missionary-db.component';
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
        component: MissionaryDbComponent
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
