import { ShowRawDatasComponent } from './show-raw-datas/show-raw-datas.component';
import { RawDataComponent } from './raw-data/raw-data.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'movies', component: MoviesListComponent},
  {path: 'rawdata', component: RawDataComponent},
  {path: 'showpost', component: ShowRawDatasComponent},
  // {path: 'list', component: ListHotelsComponent},
  // {path: 'login', component: LoginComponent},
  // {path: 'register', component: RegisterComponent}
   {path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
