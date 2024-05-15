import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProfileComponent } from './profile/profile.component';
import { AddentrepriseComponent } from './addentreprise/addentreprise.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UpdateEntrepriseComponent } from './update-entreprise/update-entreprise.component';
import { OffresadminComponent } from './offresadmin/offresadmin.component';
import { UpdateofferComponent } from './updateoffer/updateoffer.component';
import { AddoffreComponent } from './addoffre/addoffre.component';
import { DetailsoffreComponent } from './detailsoffre/detailsoffre.component';

const routes: Routes = [
  {path:"addOffre/:id",component:AddoffreComponent},
  {path:"detailsOffre/:id",component:DetailsoffreComponent},
  {path:"offresadmin/:id",component:OffresadminComponent},
  {path:"home", component:HomeComponent},
  {path:"about", component:AboutComponent},
  {path:"users",component:UsersComponent},
  {path:"login", component:LoginComponent},
  {path:"addUser",component:AddUserComponent},
  {path:"signUp",component:SignUpComponent},
  {path: "updateUser/:id", component: UpdateUserComponent},
  {path:"updateOffre/:id",component:UpdateofferComponent},
  {path:"updateEntreprise/:id",component:UpdateEntrepriseComponent},
  {path:"profile/:id",component:ProfileComponent},
  { path: 'navbar', component: NavbarComponent } ,
  {path:"addentreprise/:id",component:AddentrepriseComponent},
  {path:"", redirectTo:"home",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
