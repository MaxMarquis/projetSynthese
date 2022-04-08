"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CandidatsInfosComponent = void 0;
var core_1 = require("@angular/core");
var CandidatsInfosComponent = /** @class */ (function () {
    function CandidatsInfosComponent(route, candidatsService) {
        this.route = route;
        this.candidatsService = candidatsService;
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
            published: false,
            updatedAt: new Date()
        };
    }
    CandidatsInfosComponent.prototype.ngOnInit = function () {
        var candidatId = this.route.snapshot.paramMap.get("id");
        console.log("Id Recu: " + candidatId);
        this.getCandidat(candidatId);
    };
    CandidatsInfosComponent.prototype.getCandidat = function (test) {
        var _this = this;
        this.candidatsService.getCandidat(test).subscribe(function (res) { return _this.candidat = res; });
    };
    CandidatsInfosComponent = __decorate([
        core_1.Component({
            selector: 'app-candidats-infos',
            templateUrl: './candidats-infos.component.html',
            styleUrls: ['./candidats-infos.component.sass']
        })
    ], CandidatsInfosComponent);
    return CandidatsInfosComponent;
}());
exports.CandidatsInfosComponent = CandidatsInfosComponent;
