import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//  Componentes
import { AboutComponent } from './pages/about/about.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { HomeComponent } from './pages/home/home.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'error', component: ErrorPageComponent },
  { path: 'home', component: HomeComponent },
  { path: 'portafolio', component: PortafolioComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '**', redirectTo: 'error' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
