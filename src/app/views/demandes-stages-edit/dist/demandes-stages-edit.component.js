"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DemandesStagesEditComponent = void 0;
var core_1 = require("@angular/core");
var DemandesStagesEditComponent = /** @class */ (function () {
    function DemandesStagesEditComponent() {
        this.demandeStage = {
            _id: "123",
            title: "Titre de la demande",
            description: "Description",
            entreprise: "Nom de l'entreprise",
            startDate: new Date(),
            endDate: new Date(),
            program: "Program",
            requirements: "Requirements",
            stageType: "Stage Type",
            hoursPerWeek: 40,
            additionalInfo: "More info",
            paid: ["paid"],
            skills: ["Skills"],
            published: false,
            updatedAt: new Date(),
            region: "Region",
            activitySector: "Activity Sector",
            studentName: "Nom élève",
            studentPresentation: "Présentation",
            school: "École",
            linkToResume: "https://perdu.com/",
            active: false
        };
    }
    DemandesStagesEditComponent.prototype.ngOnInit = function () {
    };
    DemandesStagesEditComponent.prototype.test = function () {
        console.log("test: " + this.demandeStage.title);
    };
    DemandesStagesEditComponent = __decorate([
        core_1.Component({
            selector: 'app-demandes-stages-edit',
            templateUrl: './demandes-stages-edit.component.html',
            styleUrls: ['./demandes-stages-edit.component.sass']
        })
    ], DemandesStagesEditComponent);
    return DemandesStagesEditComponent;
}());
exports.DemandesStagesEditComponent = DemandesStagesEditComponent;
