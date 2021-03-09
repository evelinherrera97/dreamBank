import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonComponent } from './component/button/button.component';
import { MenuComponent } from './component/menu/menu.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './module/login/login.component';
import { HomeComponent } from './module/home/home.component';
import { TableComponent } from './component/table/table.component';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { NewProductComponent } from './module/new-product/new-product.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { TableMovementsComponent } from './component/table-movements/table-movements.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    MenuComponent,
    LoginComponent,
    HomeComponent,
    TableComponent,
    NewProductComponent,
    TableMovementsComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
