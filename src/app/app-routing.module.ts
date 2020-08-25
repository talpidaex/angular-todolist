import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './components/table/table.component';
import { HomeComponent } from './components/home/home.component';
import { DynamicTodoComponent } from './components/dynamic-todo/dynamic-todo.component';
import { LoginComponent } from './components/login/login.component';
import { LoginGuard } from './components/login/login.guard';

const routes: Routes = [
  {path : "todo", component:HomeComponent,canActivate:[LoginGuard]},
  {path:'login',component:LoginComponent},
  {path : "",redirectTo : 'todo',pathMatch : 'full'},
  {path:":type",component:DynamicTodoComponent,canActivate:[LoginGuard]},
  {path:'table', component:TableComponent},
  {path:"**",redirectTo:"todo"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
