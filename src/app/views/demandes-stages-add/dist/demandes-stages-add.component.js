"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DemandesStagesAddComponent = void 0;
var core_1 = require("@angular/core");
var DemandesStagesAddComponent = /** @class */ (function () {
    function DemandesStagesAddComponent(requetesStagesService, _location, router) {
        this.requetesStagesService = requetesStagesService;
        this._location = _location;
        this.router = router;
        this.demandeStage = {
            _id: '',
            description: '',
            entreprise: '',
            title: '',
            studentName: '',
            studentPresentation: '',
            school: '',
            startDate: new Date(),
            endDate: new Date(),
            program: '',
            stageType: '',
            hoursPerWeek: 0,
            additionalInfo: '',
            skills: [''],
            published: false,
            paid: [''],
            user: '',
            active: false,
            region: '',
            activitySector: '',
            city: '',
            linkToResume: ''
        };
    }
    DemandesStagesAddComponent.prototype.ngOnInit = function () { };
    DemandesStagesAddComponent.prototype.save = function () {
        var _this = this;
        this.requetesStagesService
            .addRequeteStage(this.demandeStage)
            .subscribe(function (_result) {
            _this.router.navigate(['/demandes-de-stages']);
        });
    };
    DemandesStagesAddComponent.prototype.backClicked = function () {
        this._location.back();
    };
    DemandesStagesAddComponent = __decorate([
        core_1.Component({
            selector: 'app-demandes-stages-add',
            templateUrl: './demandes-stages-add.component.html',
            styleUrls: ['./demandes-stages-add.component.sass']
        })
    ], DemandesStagesAddComponent);
    return DemandesStagesAddComponent;
}());
exports.DemandesStagesAddComponent = DemandesStagesAddComponent;
