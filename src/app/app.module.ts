import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RawDataComponent } from './raw-data/raw-data.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CdkTableModule } from '@angular/cdk/table/table-module';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ShowRawDatasComponent } from './show-raw-datas/show-raw-datas.component';
import { FieldValidateComponent } from './field-validate/field-validate.component';
import { FormValidateComponent } from './form-validate/form-validate.component';
import { HighLightPipe } from './high-light.pipe';

import { MatProgressBarModule } from '@angular/material/progress-bar'
import { HttpInterceptorService } from './loader/http-interceptor.service';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { AngularMaterialModule } from './angular-material/angular-material/angular-material.module';
import { AuthInterceptorProvider } from './service/auth.interceptor';
import { FakeApiInterceptor, FakeApiInterceptorProvider } from './service/fake-api.interceptor';
import { errorHandling } from './service/error-handling.interceptor';


export class DemoMaterialModule {}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoviesListComponent,
    RawDataComponent,
    ShowRawDatasComponent,
    FieldValidateComponent,
    FormValidateComponent,
    HighLightPipe,
    HeaderComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,

  ],
  providers: [AuthInterceptorProvider,FakeApiInterceptorProvider,errorHandling,{provide: HTTP_INTERCEPTORS,useClass: HttpInterceptorService,multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
