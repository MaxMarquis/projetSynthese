"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CandidatComponent = void 0;
var core_1 = require("@angular/core");
var CandidatComponent = /** @class */ (function () {
    function CandidatComponent(router) {
        this.router = router;
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
    CandidatComponent.prototype.ngOnInit = function () { };
    CandidatComponent.prototype.getInfos = function (candidat) {
        console.log("Id envoyé: " + candidat._id);
        this.router.navigate(['/candidats-infos', candidat._id]);
    };
    __decorate([
        core_1.Input()
    ], CandidatComponent.prototype, "candidat");
    CandidatComponent = __decorate([
        core_1.Component({
            selector: 'app-candidat',
            templateUrl: './candidat.component.html',
            styleUrls: ['./candidat.component.sass']
        })
    ], CandidatComponent);
    return CandidatComponent;
}());
exports.CandidatComponent = CandidatComponent;
