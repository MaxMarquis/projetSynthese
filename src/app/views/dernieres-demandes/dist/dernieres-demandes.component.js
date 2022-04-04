"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DernieresDemandesComponent = void 0;
var core_1 = require("@angular/core");
var mock_demandes_stages_1 = require("src/app/mock-demandes-stages");
var DernieresDemandesComponent = /** @class */ (function () {
    function DernieresDemandesComponent(requetesStagesService, RequetesStagesService, router, modalService) {
        this.requetesStagesService = requetesStagesService;
        this.RequetesStagesService = RequetesStagesService;
        this.router = router;
        this.modalService = modalService;
        this.requetesStage = mock_demandes_stages_1.DEMANDESSTAGES;
    }
    DernieresDemandesComponent.prototype.ngOnInit = function () {
        // this.getRequetestages();
    };
    /// Function get requetes_stages
    DernieresDemandesComponent.prototype.getRequetestages = function () {
        var _this = this;
        this.requetesStagesService
            .getRequetesStages()
            .subscribe(function (res) { return (_this.requetesStage = res); });
    };
    /// Function Edit requetes_stages
    DernieresDemandesComponent.prototype.editRequetestages = function () {
        this.router.navigateByUrl('/demandes-de-stages/edit');
    };
    /// Function Delete requetes_stages
    DernieresDemandesComponent.prototype.onDelete = function (Requetestages) {
        var _this = this;
        this.requetesStagesService.deleteRequeteStage(Requetestages._id)
            .subscribe(function (_result) { return _this.requetesStage = _this.requetesStage.filter(function (p) { return p !== Requetestages; }); });
    };
    DernieresDemandesComponent.prototype.requeteStatus = function (requetesstage, active) {
        this.RequetesStagesService.editRequeteStage(__assign(__assign({}, requetesstage), { active: active })).subscribe(function (_result) {
            requetesstage.active = active;
        });
    };
    /// Modal suppression
    DernieresDemandesComponent.prototype.open = function (content, requetesStage) {
        var _this = this;
        this.modalService
            .open(content, { ariaLabelledBy: 'titremodal' })
            .result.then(function (result) {
            if (result === 'Delete') {
                _this.onDelete(requetesStage);
            }
        }, function (reason) { });
    };
    DernieresDemandesComponent = __decorate([
        core_1.Component({
            selector: 'app-dernieres-demandes',
            templateUrl: './dernieres-demandes.component.html',
            styleUrls: ['./dernieres-demandes.component.sass']
        })
    ], DernieresDemandesComponent);
    return DernieresDemandesComponent;
}());
exports.DernieresDemandesComponent = DernieresDemandesComponent;
