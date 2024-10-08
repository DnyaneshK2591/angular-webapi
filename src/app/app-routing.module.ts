import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './feature/aboutview/about.component';
import { LocalJsonComponent } from './feature/local-json/local-json.component';
import { MockableIoComponent } from './feature/mockable-io/mockable-io.component';
import { HomeComponent } from './feature/homeview/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { authGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate:[authGuard]
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'localjson',
    component: LocalJsonComponent,
  },
  {
    path: 'mockableio',
    component: MockableIoComponent,
  },

   //Wild Card Route for 404 request 
   { path: '**', pathMatch: 'full',  
    component: PageNotFoundComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
