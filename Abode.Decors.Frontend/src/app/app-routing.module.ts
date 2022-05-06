import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'home',
    loadChildren: () => import('./pages/landing-page/landing-page.module').then(m => m.LandingPageModule)
  },
  {
    path: 'partners',
    loadChildren: () => import('./pages/partners/partners.module').then(m => m.PartnersModule)
  },
  {
    path: 'contact-us',
    loadChildren: () => import('./pages/contact-us/contact-us.module').then(m => m.ContactUsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
