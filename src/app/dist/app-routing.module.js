"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var identification_component_1 = require("./views/identification/identification.component");
var tableau_de_bord_component_1 = require("./views/tableau-de-bord/tableau-de-bord.component");
var demandes_stages_component_1 = require("./views/demandes-stages/demandes-stages.component");
var offres_stages_component_1 = require("./views/offres-stages/offres-stages.component");
var candidats_component_1 = require("./views/candidats/candidats.component");
var entreprises_component_1 = require("./views/entreprises/entreprises.component");
var candidats_add_component_1 = require("./views/candidats-add/candidats-add.component");
var candidats_infos_component_1 = require("./views/candidats-infos/candidats-infos.component");
var demandes_stages_edit_component_1 = require("./views/demandes-stages-edit/demandes-stages-edit.component");
var demandes_stages_add_component_1 = require("./views/demandes-stages-add/demandes-stages-add.component");
var routes = [
    { path: "", component: identification_component_1.IdentificationComponent },
    { path: "tableau-de-bord", component: tableau_de_bord_component_1.TableauDeBordComponent },
    { path: "demandes-de-stages", component: demandes_stages_component_1.DemandesStagesComponent },
    { path: "demandes-de-stages-add", component: demandes_stages_add_component_1.DemandesStagesAddComponent },
    { path: "demandes-de-stages/edit", component: demandes_stages_edit_component_1.DemandesStagesEditComponent },
    { path: "offres-de-stages", component: offres_stages_component_1.OffresStagesComponent },
    { path: "candidats", component: candidats_component_1.CandidatsComponent },
    { path: "candidats-add", component: candidats_add_component_1.CandidatsAddComponent },
    { path: "candidats-infos/:id", component: candidats_infos_component_1.CandidatsInfosComponent },
    { path: "entreprises", component: entreprises_component_1.EntreprisesComponent },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
