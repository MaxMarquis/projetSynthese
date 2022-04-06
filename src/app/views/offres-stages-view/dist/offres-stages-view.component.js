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
exports.OffresStagesViewComponent = void 0;
var core_1 = require("@angular/core");
var OffresStagesViewComponent = /** @class */ (function () {
    function OffresStagesViewComponent(activeRoute, offreStagesService) {
        this.activeRoute = activeRoute;
        this.offreStagesService = offreStagesService;
        this.offreStage = {
            _id: "",
            title: "Titre du stage",
            description: "Description",
            enterprise: "Nom de l'entreprise",
            startDate: new Date(),
            endDate: new Date(),
            program: "Program",
            requirements: "Requirements",
            stageType: "fulltime",
            hoursPerWeek: 35,
            additionalInfo: "More",
            paid: ["paid"],
            skills: ["skills"],
            published: true,
            active: true
        };
        this.value = "";
    }
    OffresStagesViewComponent.prototype.ngOnInit = function () {
        var stageId = String(this.activeRoute.snapshot.paramMap.get("id"));
        console.log("Id Recu: " + stageId);
        this.getOffreStage(stageId);
    };
    OffresStagesViewComponent.prototype.offerStatus = function (offresstage, active) {
        this.offreStagesService.editOffreStage(__assign(__assign({}, offresstage), { active: active })).subscribe(function (_result) {
            offresstage.active = active;
        });
    };
    OffresStagesViewComponent.prototype.getOffreStage = function (id) {
        var _this = this;
        this.offreStagesService.getOffreStage(id).subscribe(function (res) { return _this.offreStage = res; });
    };
    OffresStagesViewComponent = __decorate([
        core_1.Component({
            selector: 'app-offres-stages-view',
            templateUrl: './offres-stages-view.component.html',
            styleUrls: ['./offres-stages-view.component.sass']
        })
    ], OffresStagesViewComponent);
    return OffresStagesViewComponent;
}());
exports.OffresStagesViewComponent = OffresStagesViewComponent;
