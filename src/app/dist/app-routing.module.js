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
var auth_guard_service_1 = require("./services/auth-guard.service");
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
var demandes_stages_views_component_1 = require("./views/demandes-stages-views/demandes-stages-views.component");
var offres_stages_edit_component_1 = require("./views/offres-stages-edit/offres-stages-edit.component");
var offres_stages_add_component_1 = require("./views/offres-stages-add/offres-stages-add.component");
var entreprises_add_component_1 = require("./views/entreprises-add/entreprises-add.component");
var entreprises_infos_component_1 = require("./views/entreprises-infos/entreprises-infos.component");
var routes = [
    //ajout de AuthGuardService sur toutes les pages sauf IdentificationComponent
    { path: '',
        component: identification_component_1.IdentificationComponent
    },
    {
        path: 'tableau-de-bord',
        component: tableau_de_bord_component_1.TableauDeBordComponent,
        canActivate: [auth_guard_service_1.AuthGuardService]
    },
    {
        path: 'demandes-de-stages',
        component: demandes_stages_component_1.DemandesStagesComponent,
        canActivate: [auth_guard_service_1.AuthGuardService]
    },
    {
        path: 'demandes-de-stages/add',
        component: demandes_stages_add_component_1.DemandesStagesAddComponent,
        canActivate: [auth_guard_service_1.AuthGuardService]
    },
    {
        path: 'demandes-de-stages/edit/:id',
        component: demandes_stages_edit_component_1.DemandesStagesEditComponent,
        canActivate: [auth_guard_service_1.AuthGuardService]
    },
    {
        path: 'demandes-de-stages/view/:id',
        component: demandes_stages_views_component_1.DemandesStagesViewsComponent,
        canActivate: [auth_guard_service_1.AuthGuardService]
    },
    {
        path: 'offres-de-stages',
        component: offres_stages_component_1.OffresStagesComponent,
        canActivate: [auth_guard_service_1.AuthGuardService]
    },
    {
        path: 'offres-de-stages/edit/:id',
        component: offres_stages_edit_component_1.OffresStagesEditComponent,
        canActivate: [auth_guard_service_1.AuthGuardService]
    },
    {
        path: 'offres-de-stages/add',
        component: offres_stages_add_component_1.OffresStagesAddComponent,
        canActivate: [auth_guard_service_1.AuthGuardService]
    },
    {
        path: 'candidats',
        component: candidats_component_1.CandidatsComponent,
        canActivate: [auth_guard_service_1.AuthGuardService]
    },
    {
        path: 'candidats/add',
        component: candidats_add_component_1.CandidatsAddComponent,
        canActivate: [auth_guard_service_1.AuthGuardService]
    },
    {
        path: 'candidats/infos/:id',
        component: candidats_infos_component_1.CandidatsInfosComponent,
        canActivate: [auth_guard_service_1.AuthGuardService]
    },
    {
        path: 'entreprises',
        component: entreprises_component_1.EntreprisesComponent,
        canActivate: [auth_guard_service_1.AuthGuardService]
    },
    {
        path: 'entreprises/add',
        component: entreprises_add_component_1.EntreprisesAddComponent,
        canActivate: [auth_guard_service_1.AuthGuardService]
    },
    {
        path: 'entreprises/infos/:id',
        component: entreprises_infos_component_1.EntreprisesInfosComponent,
        canActivate: [auth_guard_service_1.AuthGuardService]
    },
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
