import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { LoginRegisterComponent } from './components/login-register/login-register.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponentComponent,
    pathMatch: 'full'
  },
  {
    path: 'login-register',
    component: LoginRegisterComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
