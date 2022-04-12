"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MajOffreComponent = void 0;
var core_1 = require("@angular/core");
var MajOffreComponent = /** @class */ (function () {
    function MajOffreComponent(offresStagesService, router) {
        this.offresStagesService = offresStagesService;
        this.router = router;
        this.nomBtn = "";
        this.formIsvalid = false;
        this.offreStage = {
            _id: '',
            title: '',
            description: '',
            enterprise: '',
            startDate: new Date(),
            endDate: new Date(),
            program: '',
            requirements: '',
            stageType: '',
            hoursPerWeek: 0,
            additionalInfo: '',
            paid: [''],
            skills: [''],
            published: false,
            active: false
        };
    }
    MajOffreComponent.prototype.ngOnInit = function () {
    };
    MajOffreComponent.prototype.maj = function () {
        var _this = this;
        // Si l'id est vide / donc nouvelle entreprise => ADD
        if (this.formIsvalid) {
            if (this.offreStage._id == '') {
                this.offresStagesService.addOffreStage(this.offreStage).subscribe(function (_) {
                    _this.router.navigateByUrl("/offres-de-stages");
                });
            }
            // Sinon l'entreprise existe => EDIT
            else {
                console.log(this.offreStage);
                this.offresStagesService
                    .editOffreStage(this.offreStage)
                    .subscribe(function (_result) {
                    _this.router.navigateByUrl('/offres-de-stages');
                });
            }
        }
    };
    __decorate([
        core_1.Input()
    ], MajOffreComponent.prototype, "nomBtn");
    __decorate([
        core_1.Input()
    ], MajOffreComponent.prototype, "formIsvalid");
    __decorate([
        core_1.Input()
    ], MajOffreComponent.prototype, "offreStage");
    MajOffreComponent = __decorate([
        core_1.Component({
            selector: 'app-maj-offre',
            templateUrl: './maj-offre.component.html',
            styleUrls: ['./maj-offre.component.sass']
        })
    ], MajOffreComponent);
    return MajOffreComponent;
}());
exports.MajOffreComponent = MajOffreComponent;
