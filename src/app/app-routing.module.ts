import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccueilComponent } from './components/accueil/accueil.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { FormArtistComponent } from './components/form/form-artist/form-artist.component';
import { FormTiprComponent } from './components/form/form-tipr/form-tipr.component';
import { FormComponent } from './components/form/form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { QrcodeGeneratorComponent } from './components/qrcode-generator/qrcode-generator.component';
import { ProfilArtistComponent } from './components/profils/profil-artist/profil-artist.component';
import { ProfilTiprComponent } from './components/profils/profil-tipr/profil-tipr.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  {
    path : '',
    redirectTo : 'accueil',
    pathMatch : 'full'
   
  },
  {
    path : 'navbar',
    component : NavbarComponent
  },
  {
    path : 'accueil',
    component : AccueilComponent
  },
  {
    path : 'about',
    component : AboutComponent
  },
  {
    path : 'inscription',
    component : FormComponent
  },
  {
    path : 'form-tipr',
    component : FormTiprComponent
  },
  {
    path : 'form-artist',
    component : FormArtistComponent
  },
  {
    path : 'catalogue',
    component : CatalogueComponent
  },
  {
    path : 'qrcode',
    component : QrcodeGeneratorComponent
  },
  {
    path : 'profil-artist',
    component : ProfilArtistComponent
  },
  {
    path : 'profil-tipr',
    component : ProfilTiprComponent
  },

  
];

export default routes;
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
