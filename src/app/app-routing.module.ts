import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdentificationComponent } from './views/identification/identification.component';
import { TableauDeBordComponent } from './views/tableau-de-bord/tableau-de-bord.component';
import { DemandesStagesComponent } from './views/demandes-stages/demandes-stages.component';
import { OffresStagesComponent } from './views/offres-stages/offres-stages.component';
import { CandidatsComponent } from './views/candidats/candidats.component';
import { EntreprisesComponent } from './views/entreprises/entreprises.component';
import { CandidatsAddComponent } from './views/candidats-add/candidats-add.component';
import { CandidatsInfosComponent } from './views/candidats-infos/candidats-infos.component';

const routes: Routes = [
  { path: "", component: IdentificationComponent },
  { path: "tableau-de-bord", component: TableauDeBordComponent },
  { path: "demandes-de-stages", component: DemandesStagesComponent },
  { path: "offres-de-stages", component: OffresStagesComponent },
  { path: "candidats", component: CandidatsComponent },
  { path: "candidats-add", component: CandidatsAddComponent },
  { path: "candidats-infos/:id", component: CandidatsInfosComponent },
  { path: "entreprises", component: EntreprisesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
