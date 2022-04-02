"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.OffresStagesEditComponent = void 0;
var core_1 = require("@angular/core");
var OffresStagesEditComponent = /** @class */ (function () {
    function OffresStagesEditComponent(activeRoute, offreStagesService) {
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
    OffresStagesEditComponent.prototype.ngOnInit = function () {
        var stageId = this.activeRoute.snapshot.paramMap.get("id");
        console.log("Id Recu: " + stageId);
        this.getOffreStage(stageId);
    };
    OffresStagesEditComponent.prototype.getOffreStage = function (id) {
        var _this = this;
        this.offreStagesService.getOffreStage(id).subscribe(function (res) { return _this.offreStage = res; });
    };
    OffresStagesEditComponent = __decorate([
        core_1.Component({
            selector: 'app-offres-stages-edit',
            templateUrl: './offres-stages-edit.component.html',
            styleUrls: ['./offres-stages-edit.component.sass']
        })
    ], OffresStagesEditComponent);
    return OffresStagesEditComponent;
}());
exports.OffresStagesEditComponent = OffresStagesEditComponent;
///**test(value: String) ; {
///**return this.offreStage.paid.push(value)
///** }
