import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// QRCode
import { QRCodeModule } from 'angular2-qrcode';
import { FormsModule } from '@angular/forms';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import {  MatTabsModule } from '@angular/material/tabs';




import routes from './app-routing.module';
import { AccueilComponent } from './components/accueil/accueil.component';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormComponent } from './components/form/form.component';
import { FormTiprComponent } from './components/form/form-tipr/form-tipr.component';
import { FormArtistComponent } from './components/form/form-artist/form-artist.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { QrcodeGeneratorComponent } from './components/qrcode-generator/qrcode-generator.component';
import { ProfilArtistComponent } from './components/profils/profil-artist/profil-artist.component';
import { ProfilTiprComponent } from './components/profils/profil-tipr/profil-tipr.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AccueilComponent,
    FormComponent,
    FormTiprComponent,
    FormArtistComponent,
    CatalogueComponent,
    QrcodeGeneratorComponent,
    ProfilArtistComponent,
    ProfilTiprComponent,
    AboutComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule,
    QRCodeModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
