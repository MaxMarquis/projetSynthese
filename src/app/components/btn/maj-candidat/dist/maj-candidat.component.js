"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MajCandidatComponent = void 0;
var core_1 = require("@angular/core");
var MajCandidatComponent = /** @class */ (function () {
    function MajCandidatComponent(candidatsService, router) {
        this.candidatsService = candidatsService;
        this.router = router;
        this.nomBtn = '';
        this.formIsvalid = false;
        this.candidat = {
            _id: '',
            name: '',
            description: '',
            jobTitle: '',
            email: '',
            phone: '',
            address: '',
            city: '',
            province: '',
            postalCode: '',
            published: false
        };
    }
    MajCandidatComponent.prototype.ngOnInit = function () { };
    MajCandidatComponent.prototype.maj = function () {
        var _this = this;
        // Si l'id est vide / donc nouvelle entreprise => ADD
        if (this.candidat._id == '') {
            this.candidatsService.addCandidat(this.candidat).subscribe(function (_) {
                _this.router.navigateByUrl('/candidats');
            });
        }
        // Sinon l'entreprise existe => EDIT
        else {
            this.candidatsService.editCandidat(this.candidat).subscribe(function (_result) {
                _this.router.navigateByUrl('/candidats');
            });
        }
    };
    __decorate([
        core_1.Input()
    ], MajCandidatComponent.prototype, "nomBtn");
    __decorate([
        core_1.Input()
    ], MajCandidatComponent.prototype, "formIsvalid");
    __decorate([
        core_1.Input()
    ], MajCandidatComponent.prototype, "candidat");
    MajCandidatComponent = __decorate([
        core_1.Component({
            selector: 'app-maj-candidat',
            templateUrl: './maj-candidat.component.html',
            styleUrls: ['./maj-candidat.component.sass']
        })
    ], MajCandidatComponent);
    return MajCandidatComponent;
}());
exports.MajCandidatComponent = MajCandidatComponent;
