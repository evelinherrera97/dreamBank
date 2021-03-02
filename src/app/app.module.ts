import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputComponent } from './component/input/input.component';
import { ButtonComponent } from './component/button/button.component';
import { MenuComponent } from './component/menu/menu.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './module/login/login.component';
import { HomeComponent } from './module/home/home.component';
import { TableComponent } from './component/table/table.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ButtonComponent,
    MenuComponent,
    LoginComponent,
    HomeComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
