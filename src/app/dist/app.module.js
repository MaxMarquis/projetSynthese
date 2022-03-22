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
var barre_actions_component_1 = require("./components/barre-actions/barre-actions.component");
var candidat_component_1 = require("./components/candidat/candidat.component");
var btn_annuler_component_1 = require("./components/btn-annuler/btn-annuler.component");
var nav_component_1 = require("./components/nav/nav.component");
var side_nav_component_1 = require("./components/side-nav/side-nav.component");
var save_component_1 = require("./components/save/save.component");
var crud_component_1 = require("./components/crud/crud.component");
var modal_component_1 = require("./components/modal/modal.component");
var tableau_de_bord_component_1 = require("./views/tableau-de-bord/tableau-de-bord.component");
var demandes_stages_component_1 = require("./views/demandes-stages/demandes-stages.component");
var offres_stages_component_1 = require("./views/offres-stages/offres-stages.component");
var candidats_component_1 = require("./views/candidats/candidats.component");
var entreprises_component_1 = require("./views/entreprises/entreprises.component");
var identification_component_1 = require("./views/identification/identification.component");
var candidats_add_component_1 = require("./views/candidats-add/candidats-add.component");
var candidats_infos_component_1 = require("./views/candidats-infos/candidats-infos.component");
var demandes_stages_edit_component_1 = require("./views/demandes-stages-edit/demandes-stages-edit.component");
var demandes_stages_add_component_1 = require("./views/demandes-stages-add/demandes-stages-add.component");
var dernieres_demandes_component_1 = require("./views/dernieres-demandes/dernieres-demandes.component");
var dernieres_offres_component_1 = require("./views/dernieres-offres/dernieres-offres.component");
var angular_fontawesome_1 = require("@fortawesome/angular-fontawesome");
var btn_maj_component_1 = require("./components/btn-maj/btn-maj.component");
var offres_stages_edit_component_1 = require("./views/offres-stages-edit/offres-stages-edit.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                barre_actions_component_1.BarreActionsComponent,
                btn_annuler_component_1.BtnAnnulerComponent,
                candidat_component_1.CandidatComponent,
                crud_component_1.CrudComponent,
                modal_component_1.ModalComponent,
                nav_component_1.NavComponent,
                save_component_1.SaveComponent,
                side_nav_component_1.SideNavComponent,
                tableau_de_bord_component_1.TableauDeBordComponent,
                demandes_stages_component_1.DemandesStagesComponent,
                offres_stages_component_1.OffresStagesComponent,
                candidats_component_1.CandidatsComponent,
                entreprises_component_1.EntreprisesComponent,
                identification_component_1.IdentificationComponent,
                candidats_add_component_1.CandidatsAddComponent,
                candidats_infos_component_1.CandidatsInfosComponent,
                demandes_stages_edit_component_1.DemandesStagesEditComponent,
                demandes_stages_add_component_1.DemandesStagesAddComponent,
                btn_maj_component_1.BtnMajComponent,
                offres_stages_edit_component_1.OffresStagesEditComponent,
                dernieres_demandes_component_1.DernieresDemandesComponent,
                dernieres_offres_component_1.DernieresOffresComponent,
            ],
            imports: [platform_browser_1.BrowserModule, app_routing_module_1.AppRoutingModule, http_1.HttpClientModule, forms_1.FormsModule, angular_fontawesome_1.FontAwesomeModule],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
