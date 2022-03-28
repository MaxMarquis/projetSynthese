import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BarreActionsComponent } from './components/barre-actions/barre-actions.component';
import { CandidatComponent } from './components/candidat/candidat.component';
import { BtnAnnulerComponent } from './components/btn-annuler/btn-annuler.component';
import { NavComponent } from './components/nav/nav.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { SaveComponent } from './components/save/save.component';
import { CrudComponent } from './components/crud/crud.component';
import { ModalComponent } from './components/modal/modal.component';

import { TableauDeBordComponent } from './views/tableau-de-bord/tableau-de-bord.component';
import { DemandesStagesComponent } from './views/demandes-stages/demandes-stages.component';
import { OffresStagesComponent } from './views/offres-stages/offres-stages.component';
import { CandidatsComponent } from './views/candidats/candidats.component';
import { EntreprisesComponent } from './views/entreprises/entreprises.component';
import { IdentificationComponent } from './views/identification/identification.component';
import { CandidatsAddComponent } from './views/candidats-add/candidats-add.component';
import { CandidatsInfosComponent } from './views/candidats-infos/candidats-infos.component';
import { DemandesStagesEditComponent } from './views/demandes-stages-edit/demandes-stages-edit.component';
import { DemandesStagesAddComponent } from './views/demandes-stages-add/demandes-stages-add.component';

import { DernieresDemandesComponent } from './views/dernieres-demandes/dernieres-demandes.component';
import { DernieresOffresComponent } from './views/dernieres-offres/dernieres-offres.component';


import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BtnMajComponent } from './components/btn-maj/btn-maj.component';
import { OffresStagesEditComponent } from './views/offres-stages-edit/offres-stages-edit.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OffresStagesAddComponent } from './views/offres-stages-add/offres-stages-add.component';
import { EntreprisesAddComponent } from './views/entreprises-add/entreprises-add.component';
import { EntrepriseComponent } from './components/entreprise/entreprise.component';
import { EntreprisesInfosComponent } from './views/entreprises-infos/entreprises-infos.component';
import { DemandesStagesViewsComponent } from './views/demandes-stages-views/demandes-stages-views.component';

@NgModule({
  declarations: [
    AppComponent,
    BarreActionsComponent,
    BtnAnnulerComponent,
    CandidatComponent,
    CrudComponent,
    ModalComponent,
    NavComponent,
    SaveComponent,
    SideNavComponent,
    TableauDeBordComponent,
    DemandesStagesComponent,
    OffresStagesComponent,
    CandidatsComponent,
    EntreprisesComponent,
    IdentificationComponent,
    CandidatsAddComponent,
    CandidatsInfosComponent,
    DemandesStagesEditComponent,
    DemandesStagesAddComponent,
    BtnMajComponent,
    OffresStagesEditComponent,
    DernieresDemandesComponent,
    DernieresOffresComponent,
    NavbarComponent,
    OffresStagesAddComponent,
    EntreprisesAddComponent,
    EntrepriseComponent,
    EntreprisesInfosComponent,
    DemandesStagesViewsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
