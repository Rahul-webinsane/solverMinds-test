import { LoginComponent } from './login/login.component';
import { ShowRawDatasComponent } from './show-raw-datas/show-raw-datas.component';
import { RawDataComponent } from './raw-data/raw-data.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IsAuthenticatedGuard } from './guards/is-authenticated.guard';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent,canActivate: [IsAuthenticatedGuard],},
  {path: 'movies', component: MoviesListComponent,canActivate: [IsAuthenticatedGuard],},
  {path: 'rawdata', component: RawDataComponent,canActivate: [IsAuthenticatedGuard],},
  {path: 'showpost', component: ShowRawDatasComponent,canActivate: [IsAuthenticatedGuard],},
  {path: 'common', loadChildren : ()=> import('../app/training/practise/practise.module').then(m => m.PractiseModule),canActivate: [IsAuthenticatedGuard],},
  // {path: 'login', component: LoginComponent},
  // {path: 'register', component: RegisterComponent}
   {path: '**', redirectTo: '/home',canActivate: [IsAuthenticatedGuard],}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
