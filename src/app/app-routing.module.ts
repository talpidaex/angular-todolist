import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './components/pages/todo/todo.component';
import { LoginComponent } from './components/login/login.component';
import { LoginGuard } from './components/login/login.guard';
import { TodoListComponent } from './components/pages/todo-list/todo-list.component';
import { InProgressListComponent } from './components/pages/in-progress-list/in-progress-list.component';
import { CompletedListComponent } from './components/pages/completed-list/completed-list.component';

const routes: Routes = [
  {path : "dashboard", component:TodoComponent},
  {path : "todo-list", component:TodoListComponent,canActivate:[LoginGuard]},
  {path : "in-progress-list", component:InProgressListComponent,canActivate:[LoginGuard]},
  {path : "completed-list", component:CompletedListComponent,canActivate:[LoginGuard]},
  {path :'login',component:LoginComponent},
  {path: "",redirectTo:"dashboard",pathMatch:"full"},
  {path : "**" ,redirectTo:"todo"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
