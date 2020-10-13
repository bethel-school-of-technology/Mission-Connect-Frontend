import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MissionaryConfigComponent } from './missionary-config/missionary-config.component';
import { MissionaryComponent } from './missionary/missionary.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
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
