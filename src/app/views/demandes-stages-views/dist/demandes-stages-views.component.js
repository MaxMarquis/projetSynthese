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
exports.DemandesStagesViewsComponent = void 0;
var core_1 = require("@angular/core");
var DemandesStagesViewsComponent = /** @class */ (function () {
    function DemandesStagesViewsComponent(activeRoute, requetesStagesService) {
        this.activeRoute = activeRoute;
        this.requetesStagesService = requetesStagesService;
        this.requete_stage = {
            _id: "",
            description: "",
            entreprise: "",
            title: "",
            studentName: "",
            studentPresentation: "",
            school: "",
            startDate: new Date(),
            endDate: new Date(),
            program: "",
            stageType: "",
            hoursPerWeek: 0,
            additionalInfo: "",
            skills: [""],
            published: false,
            paid: [""],
            user: "",
            active: true,
            region: "",
            activitySector: "",
            city: "",
            linkToResume: ""
        };
    }
    DemandesStagesViewsComponent.prototype.ngOnInit = function () {
        var stageId = this.activeRoute.snapshot.paramMap.get("id");
        console.log("Id Recu: " + stageId);
        this.getRequeteStage(stageId);
    };
    DemandesStagesViewsComponent.prototype.getRequeteStage = function (id) {
        var _this = this;
        this.requetesStagesService.getRequeteStage(id).subscribe(function (res) { return _this.requete_stage = res; });
    };
    DemandesStagesViewsComponent.prototype.requeteStatus = function (requete_stage, active) {
        this.requetesStagesService.editRequeteStage(__assign(__assign({}, requete_stage), { active: active })).subscribe(function (_result) {
            requete_stage.active = active;
        });
    };
    DemandesStagesViewsComponent = __decorate([
        core_1.Component({
            selector: 'app-demandes-stages-views',
            templateUrl: './demandes-stages-views.component.html',
            styleUrls: ['./demandes-stages-views.component.sass']
        })
    ], DemandesStagesViewsComponent);
    return DemandesStagesViewsComponent;
}());
exports.DemandesStagesViewsComponent = DemandesStagesViewsComponent;
