import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MissionaryConfigComponent } from './missionary-config/missionary-config.component';
import { MissionaryComponent } from './missionary/missionary.component';
import { HomeComponent } from './home/home.component';
import { MissionaryDbComponent } from './modules/missionaries/components/missionary-db/missionary-db.component';
import { StatementComponent } from './statement/statement.component';
import { ResultsComponent } from './modules/missionaries/components/results/results.component';


const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent, //has <router-outlet> to load statement and search results
    children: [
      
      {
        path: 'database', 
        component: MissionaryDbComponent
      },
      {
        path: 'results',
        component: ResultsComponent
      },
      {
        path: '',
        component: StatementComponent
      }
    ]
  },
  {
    path: 'missionary',
    component: MissionaryComponent
  },
  {
    path: 'addnew',
    component: MissionaryConfigComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
