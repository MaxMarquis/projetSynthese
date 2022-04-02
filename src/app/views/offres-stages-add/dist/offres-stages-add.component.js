"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.OffresStagesAddComponent = void 0;
var core_1 = require("@angular/core");
var OffresStagesAddComponent = /** @class */ (function () {
    function OffresStagesAddComponent(OffresStagesService, _location, router) {
        this.OffresStagesService = OffresStagesService;
        this._location = _location;
        this.router = router;
        this.offreStage = {
            _id: "",
            title: "",
            description: "",
            enterprise: "",
            startDate: new Date(),
            endDate: new Date(),
            program: "",
            requirements: "",
            stageType: "",
            hoursPerWeek: 0,
            additionalInfo: "",
            paid: [""],
            skills: [""],
            published: false,
            active: false
        };
    }
    OffresStagesAddComponent.prototype.ngOnInit = function () { };
    OffresStagesAddComponent.prototype.save = function () {
        var _this = this;
        this.OffresStagesService
            .addOffreStage(this.offreStage)
            .subscribe(function (_result) {
            _this.router.navigate(['/offres-de-stages']);
        });
    };
    OffresStagesAddComponent.prototype.backClicked = function () {
        this._location.back();
    };
    OffresStagesAddComponent = __decorate([
        core_1.Component({
            selector: 'app-offres-stages-add',
            templateUrl: './offres-stages-add.component.html',
            styleUrls: ['./offres-stages-add.component.sass']
        })
    ], OffresStagesAddComponent);
    return OffresStagesAddComponent;
}());
exports.OffresStagesAddComponent = OffresStagesAddComponent;
