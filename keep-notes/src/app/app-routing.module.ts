import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNoteComponent } from './add-note/add-note.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NoteDetailsComponent } from './note-details/note-details.component';
import { DeactivatedGuard } from './services/deactivated.guard';
import { GuardGuard } from './services/guard.guard';

const routes: Routes = [
  {path:'home',component:DashboardComponent,pathMatch:'full',canActivate:[GuardGuard]},
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'note-details/:id',pathMatch:'full',component:NoteDetailsComponent, canActivate: [GuardGuard]},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
