import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './components/table/table.component';
import { AppComponent } from '../app/app.component';
import { HomeComponent } from './components/home/home.component';
import { DynamicTodoComponent } from './components/dynamic-todo/dynamic-todo.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:':type',component:DynamicTodoComponent},
  {path:'table', component:TableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
