import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './feature/aboutview/about.component';
import { LocalJsonComponent } from './feature/local-json/local-json.component';
import { MockableIoComponent } from './feature/mockable-io/mockable-io.component';
import { HomeComponent } from './feature/homeview/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
