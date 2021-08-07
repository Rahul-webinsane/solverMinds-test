import { TestingComponent } from './testing/testing.component';
import { LearnComponent } from './learn/learn.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'learning',component:LearnComponent},
  {path:'testing',component:TestingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PractiseRoutingModule { }
