"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MajEntrepriseComponent = void 0;
var core_1 = require("@angular/core");
var MajEntrepriseComponent = /** @class */ (function () {
    function MajEntrepriseComponent(entrepriseService, router) {
        this.entrepriseService = entrepriseService;
        this.router = router;
        this.nomBtn = '';
        this.formIsvalid = false;
        this.entreprise = {
            _id: '',
            name: '',
            description: '',
            imageUrl: '',
            contactName: '',
            contactEmail: '',
            contactPhone: '',
            address: '',
            city: '',
            province: '',
            postalCode: '',
            published: false
        };
    }
    MajEntrepriseComponent.prototype.ngOnInit = function () { };
    MajEntrepriseComponent.prototype.maj = function () {
        var _this = this;
        // Si l'id est vide / donc nouvelle entreprise => ADD
        if (this.entreprise._id == '') {
            this.entrepriseService.addEntreprise(this.entreprise).subscribe(function (_) {
                _this.router.navigateByUrl('/entreprises');
            });
        }
        // Sinon l'entreprise existe => EDIT
        else {
            this.entrepriseService
                .editEntreprise(this.entreprise)
                .subscribe(function (_result) {
                _this.router.navigateByUrl('/entreprises');
            });
        }
    };
    __decorate([
        core_1.Input()
    ], MajEntrepriseComponent.prototype, "nomBtn");
    __decorate([
        core_1.Input()
    ], MajEntrepriseComponent.prototype, "formIsvalid");
    __decorate([
        core_1.Input()
    ], MajEntrepriseComponent.prototype, "entreprise");
    MajEntrepriseComponent = __decorate([
        core_1.Component({
            selector: 'app-maj-entreprise',
            templateUrl: './maj-entreprise.component.html',
            styleUrls: ['./maj-entreprise.component.sass']
        })
    ], MajEntrepriseComponent);
    return MajEntrepriseComponent;
}());
exports.MajEntrepriseComponent = MajEntrepriseComponent;
