import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'; 
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table'; 
import { MatPaginatorModule } from '@angular/material/paginator';

import { TableComponent } from './components/table/table.component';
import { HeaderComponent } from './components/header/header.component';
import { DynamicTodoComponent } from './components/dynamic-todo/dynamic-todo.component';
import { InputComponent } from './components/header/input/input.component';
import { LogoRoutesComponent } from './components/header/logo-routes/logo-routes.component';
import { LoginComponent } from './components/login/login.component';
import { LoginGuard } from './components/login/login.guard';
import { AccountService } from './services/account.service';
import { AlertService } from './services/alert.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TableComponent,
    HeaderComponent,
    DynamicTodoComponent,
    InputComponent,
    LogoRoutesComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    DragDropModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatDividerModule
  ],
  providers: [
    {provide : 'apiUrl' ,useValue :"https://kafein-todolist.herokuapp.com/todo"},
    LoginGuard,AccountService,AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
