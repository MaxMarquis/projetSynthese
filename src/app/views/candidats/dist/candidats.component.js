"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CandidatsComponent = void 0;
var core_1 = require("@angular/core");
var CandidatsComponent = /** @class */ (function () {
    function CandidatsComponent(candidatService, router) {
        this.candidatService = candidatService;
        this.router = router;
        this.candidats = [];
    }
    CandidatsComponent.prototype.ngOnInit = function () {
        this.getCandidats();
    };
    CandidatsComponent.prototype.getCandidats = function () {
        var _this = this;
        this.candidatService
            .getCandidats()
            .subscribe(function (res) { return (_this.candidats = res); });
    };
    CandidatsComponent.prototype.addCandidat = function () {
        this.router.navigateByUrl('/candidats-add');
    };
    CandidatsComponent = __decorate([
        core_1.Component({
            selector: 'app-candidats',
            templateUrl: './candidats.component.html',
            styleUrls: ['./candidats.component.sass']
        })
    ], CandidatsComponent);
    return CandidatsComponent;
}());
exports.CandidatsComponent = CandidatsComponent;
