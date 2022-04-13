"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/common/http");
var forms_1 = require("@angular/forms");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var auth_guard_service_1 = require("./services/auth-guard.service");
var angular_fontawesome_1 = require("@fortawesome/angular-fontawesome");
// Composants
var candidat_component_1 = require("./components/candidat/candidat.component");
var crud_component_1 = require("./components/crud/crud.component");
var modal_component_1 = require("./components/modal/modal.component");
var navbar_component_1 = require("./components/navbar/navbar.component");
var compteurs_component_1 = require("./components/compteurs/compteurs.component");
var dernieres_demandes_component_1 = require("./components/dernieres-demandes/dernieres-demandes.component");
var dernieres_offres_component_1 = require("./components/dernieres-offres/dernieres-offres.component");
var btn_annuler_component_1 = require("./components/btn-annuler/btn-annuler.component");
var maj_demande_component_1 = require("./components/btn/maj-demande/maj-demande.component");
var maj_offre_component_1 = require("./components/btn/maj-offre/maj-offre.component");
var maj_candidat_component_1 = require("./components/btn/maj-candidat/maj-candidat.component");
var maj_entreprise_component_1 = require("./components/btn/maj-entreprise/maj-entreprise.component");
// Vues
var tableau_de_bord_component_1 = require("./views/tableau-de-bord/tableau-de-bord.component");
var identification_component_1 = require("./views/identification/identification.component");
var candidats_component_1 = require("./views/candidats/candidats.component");
var candidats_add_component_1 = require("./views/candidats-add/candidats-add.component");
var candidats_edit_component_1 = require("./views/candidats-edit/candidats-edit.component");
var candidats_view_component_1 = require("./views/candidats-view/candidats-view.component");
var demandes_stages_component_1 = require("./views/demandes-stages/demandes-stages.component");
var demandes_stages_edit_component_1 = require("./views/demandes-stages-edit/demandes-stages-edit.component");
var demandes_stages_add_component_1 = require("./views/demandes-stages-add/demandes-stages-add.component");
var demandes_stages_views_component_1 = require("./views/demandes-stages-views/demandes-stages-views.component");
var offres_stages_component_1 = require("./views/offres-stages/offres-stages.component");
var offres_stages_edit_component_1 = require("./views/offres-stages-edit/offres-stages-edit.component");
var offres_stages_add_component_1 = require("./views/offres-stages-add/offres-stages-add.component");
var offres_stages_view_component_1 = require("./views/offres-stages-view/offres-stages-view.component");
var entreprise_component_1 = require("./components/entreprise/entreprise.component");
var entreprises_component_1 = require("./views/entreprises/entreprises.component");
var entreprises_add_component_1 = require("./views/entreprises-add/entreprises-add.component");
var entreprises_edit_component_1 = require("./views/entreprises-edit/entreprises-edit.component");
var entreprises_view_component_1 = require("./views/entreprises-view/entreprises-view.component");
var common_1 = require("@angular/common");
var fr_1 = require("@angular/common/locales/fr");
common_1.registerLocaleData(fr_1["default"], 'fr');
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                btn_annuler_component_1.BtnAnnulerComponent,
                candidat_component_1.CandidatComponent,
                crud_component_1.CrudComponent,
                modal_component_1.ModalComponent,
                tableau_de_bord_component_1.TableauDeBordComponent,
                demandes_stages_component_1.DemandesStagesComponent,
                offres_stages_component_1.OffresStagesComponent,
                candidats_component_1.CandidatsComponent,
                entreprises_component_1.EntreprisesComponent,
                identification_component_1.IdentificationComponent,
                candidats_add_component_1.CandidatsAddComponent,
                demandes_stages_edit_component_1.DemandesStagesEditComponent,
                demandes_stages_add_component_1.DemandesStagesAddComponent,
                offres_stages_edit_component_1.OffresStagesEditComponent,
                dernieres_demandes_component_1.DernieresDemandesComponent,
                dernieres_offres_component_1.DernieresOffresComponent,
                navbar_component_1.NavbarComponent,
                offres_stages_add_component_1.OffresStagesAddComponent,
                entreprises_add_component_1.EntreprisesAddComponent,
                entreprise_component_1.EntrepriseComponent,
                demandes_stages_views_component_1.DemandesStagesViewsComponent,
                candidats_edit_component_1.CandidatsEditComponent,
                entreprises_edit_component_1.EntreprisesEditComponent,
                offres_stages_view_component_1.OffresStagesViewComponent,
                entreprises_view_component_1.EntreprisesViewComponent,
                candidats_view_component_1.CandidatsViewComponent,
                compteurs_component_1.CompteursComponent,
                maj_demande_component_1.MajDemandeComponent,
                maj_offre_component_1.MajOffreComponent,
                maj_candidat_component_1.MajCandidatComponent,
                maj_entreprise_component_1.MajEntrepriseComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                forms_1.FormsModule,
                angular_fontawesome_1.FontAwesomeModule,
            ],
            providers: [auth_guard_service_1.AuthGuardService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
