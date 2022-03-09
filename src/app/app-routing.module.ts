import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdentificationComponent } from './views/identification/identification.component';
import { TableauDeBordComponent } from './views/tableau-de-bord/tableau-de-bord.component';
import { DemandesStagesComponent } from './views/demandes-stages/demandes-stages.component';
import { OffresStagesComponent } from './views/offres-stages/offres-stages.component';
import { CandidatsComponent } from './views/candidats/candidats.component';
import { EntreprisesComponent } from './views/entreprises/entreprises.component';

const routes: Routes = [
  { path: "", component: IdentificationComponent },
  { path: "tableau-de-bord", component: TableauDeBordComponent },
  { path: "demandes-de-stages", component: DemandesStagesComponent },
  { path: "offres-de-stages", component: OffresStagesComponent },
  { path: "candidats", component: CandidatsComponent },
  { path: "entreprises", component: EntreprisesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
