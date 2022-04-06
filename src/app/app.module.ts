import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuardService } from './services/auth-guard.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CandidatComponent } from './components/candidat/candidat.component';
import { BtnAnnulerComponent } from './components/btn-annuler/btn-annuler.component';
import { SaveComponent } from './components/save/save.component';
import { CrudComponent } from './components/crud/crud.component';
import { ModalComponent } from './components/modal/modal.component';
import { BtnMajComponent } from './components/btn-maj/btn-maj.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { TableauDeBordComponent } from './views/tableau-de-bord/tableau-de-bord.component';
import { IdentificationComponent } from './views/identification/identification.component';

import { CandidatsComponent } from './views/candidats/candidats.component';
import { CandidatsAddComponent } from './views/candidats-add/candidats-add.component';
import { CandidatsEditComponent } from './views/candidats-edit/candidats-edit.component';
import { CandidatsViewComponent } from './views/candidats-view/candidats-view.component';

import { DemandesStagesComponent } from './views/demandes-stages/demandes-stages.component';
import { DemandesStagesEditComponent } from './views/demandes-stages-edit/demandes-stages-edit.component';
import { DemandesStagesAddComponent } from './views/demandes-stages-add/demandes-stages-add.component';
import { DemandesStagesViewsComponent } from './views/demandes-stages-views/demandes-stages-views.component';

import { DernieresDemandesComponent } from './views/dernieres-demandes/dernieres-demandes.component';
import { DernieresOffresComponent } from './views/dernieres-offres/dernieres-offres.component';

import { OffresStagesComponent } from './views/offres-stages/offres-stages.component';
import { OffresStagesEditComponent } from './views/offres-stages-edit/offres-stages-edit.component';
import { OffresStagesAddComponent } from './views/offres-stages-add/offres-stages-add.component';
import { OffresStagesViewComponent } from './views/offres-stages-view/offres-stages-view.component';

import { EntrepriseComponent } from './components/entreprise/entreprise.component';
import { EntreprisesComponent } from './views/entreprises/entreprises.component';
import { EntreprisesAddComponent } from './views/entreprises-add/entreprises-add.component';
import { EntreprisesEditComponent } from './views/entreprises-edit/entreprises-edit.component';
import { EntreprisesViewComponent } from './views/entreprises-view/entreprises-view.component';

import { MajDemandeComponent } from './components/btn/maj-demande/maj-demande.component';
import { MajOffreComponent } from './components/btn/maj-offre/maj-offre.component';
import { MajCandidatComponent } from './components/btn/maj-candidat/maj-candidat.component';
import { MajEntrepriseComponent } from './components/btn/maj-entreprise/maj-entreprise.component';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { CompteursComponent } from './compteurs/compteurs.component';
registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    AppComponent,
    BtnAnnulerComponent,
    CandidatComponent,
    CrudComponent,
    ModalComponent,
    SaveComponent,
    TableauDeBordComponent,
    DemandesStagesComponent,
    OffresStagesComponent,
    CandidatsComponent,
    EntreprisesComponent,
    IdentificationComponent,
    CandidatsAddComponent,
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
    DemandesStagesViewsComponent,
    CandidatsEditComponent,
    EntreprisesEditComponent,
    OffresStagesViewComponent,
    EntreprisesViewComponent,
    CandidatsViewComponent,
    CompteursComponent,
    MajDemandeComponent,
    MajOffreComponent,
    MajCandidatComponent,
    MajEntrepriseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
