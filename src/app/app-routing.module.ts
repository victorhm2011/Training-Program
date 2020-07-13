import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './components/users/users.component'
import { AboutComponent } from './components/pages/about/about.component'
import { RepositoriesComponent } from './components/repositories/repositories.component'



const routes: Routes = [
  { path:'', component: UsersComponent},
  { path:'about', component: AboutComponent},
  { path:'users/:userLogin/repositories' , component: RepositoriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
