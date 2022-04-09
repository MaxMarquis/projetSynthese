"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MajDemandeComponent = void 0;
var core_1 = require("@angular/core");
var MajDemandeComponent = /** @class */ (function () {
    function MajDemandeComponent(requetesStagesService, router) {
        this.requetesStagesService = requetesStagesService;
        this.router = router;
        this.nomBtn = '';
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
            skills: [],
            published: false,
            paid: [],
            user: '',
            active: false,
            region: '',
            activitySector: '',
            city: '',
            linkToResume: ''
        };
    }
    MajDemandeComponent.prototype.ngOnInit = function () { };
    MajDemandeComponent.prototype.maj = function () {
        var _this = this;
        // Si l'id est vide / donc nouvelle demande de stage => ADD
        if (this.demandeStage._id == '') {
            console.log(this.demandeStage);
            this.requetesStagesService
                .addRequeteStage(this.demandeStage)
                .subscribe(function (_) {
                _this.router.navigateByUrl('/demandes-de-stages');
            });
        }
        // Sinon la demande de stage existe => EDIT
        else {
            console.log(this.demandeStage);
            this.requetesStagesService
                .editRequeteStage(this.demandeStage)
                .subscribe(function (_result) {
                _this.router.navigateByUrl('/demandes-de-stages');
            });
        }
    };
    __decorate([
        core_1.Input()
    ], MajDemandeComponent.prototype, "nomBtn");
    __decorate([
        core_1.Input()
    ], MajDemandeComponent.prototype, "demandeStage");
    MajDemandeComponent = __decorate([
        core_1.Component({
            selector: 'app-maj-demande',
            templateUrl: './maj-demande.component.html',
            styleUrls: ['./maj-demande.component.sass']
        })
    ], MajDemandeComponent);
    return MajDemandeComponent;
}());
exports.MajDemandeComponent = MajDemandeComponent;
