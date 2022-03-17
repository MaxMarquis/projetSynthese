import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { TableauDeBordComponent } from './views/tableau-de-bord/tableau-de-bord.component';
import { DemandesStagesComponent } from './views/demandes-stages/demandes-stages.component';
import { OffresStagesComponent } from './views/offres-stages/offres-stages.component';
import { CandidatsComponent } from './views/candidats/candidats.component';
import { EntreprisesComponent } from './views/entreprises/entreprises.component';
import { HttpClientModule } from '@angular/common/http';
import { IdentificationComponent } from './views/identification/identification.component';
import { FormsModule } from '@angular/forms';
import { BarreActionsComponent } from './components/barre-actions/barre-actions.component';
import { CandidatComponent } from './components/candidat/candidat.component';
import { CandidatsAddComponent } from './views/candidats-add/candidats-add.component';
import { CandidatsInfosComponent } from './views/candidats-infos/candidats-infos.component';
import { BtnAnnulerComponent } from './components/btn-annuler/btn-annuler.component';
import { DemandesStagesEditComponent } from './views/demandes-stages-edit/demandes-stages-edit.component';
import { NavComponent } from './nav/nav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SideNavComponent } from './side-nav/side-nav.component';
import { SaveComponent } from './save/save.component';
import { CrudComponent } from './crud/crud.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TableauDeBordComponent,
    DemandesStagesComponent,
    OffresStagesComponent,
    CandidatsComponent,
    EntreprisesComponent,
    IdentificationComponent,
    BarreActionsComponent,
    CandidatComponent,
    CandidatsAddComponent,
    CandidatsInfosComponent,
    BtnAnnulerComponent,
    DemandesStagesEditComponent,
    NavComponent,
    SideNavComponent,
    SaveComponent,
    CrudComponent,
    ModalComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
