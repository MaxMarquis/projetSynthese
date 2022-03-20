"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DemandesStagesComponent = void 0;
var core_1 = require("@angular/core");
var DemandesStagesComponent = /** @class */ (function () {
    function DemandesStagesComponent(requetesStagesService, router) {
        this.requetesStagesService = requetesStagesService;
        this.router = router;
        this.requetesStage = [];
    }
    DemandesStagesComponent.prototype.ngOnInit = function () {
        this.getRequetestages();
    };
    /// Function get requetes_stages
    DemandesStagesComponent.prototype.getRequetestages = function () {
        var _this = this;
        this.requetesStagesService
            .getRequetesStages()
            .subscribe(function (res) { return (_this.requetesStage = res); });
    };
    /// Function Delete requetes_stages
    DemandesStagesComponent.prototype.onDelete = function (Requetestages) {
        var _this = this;
        this.requetesStagesService.deleteRequeteStage(Requetestages._id)
            .subscribe(function (_result) { return _this.requetesStage = _this.requetesStage.filter(function (p) { return p !== Requetestages; }); });
    };
    DemandesStagesComponent.prototype.addDemandesstages = function () {
        this.router.navigateByUrl('/demandes-de-stages-add');
    };
    DemandesStagesComponent = __decorate([
        core_1.Component({
            selector: 'app-demandes-stages',
            templateUrl: './demandes-stages.component.html',
            styleUrls: ['./demandes-stages.component.sass']
        })
    ], DemandesStagesComponent);
    return DemandesStagesComponent;
}());
exports.DemandesStagesComponent = DemandesStagesComponent;
