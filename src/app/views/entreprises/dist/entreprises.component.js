"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.EntreprisesComponent = void 0;
var core_1 = require("@angular/core");
var EntreprisesComponent = /** @class */ (function () {
    function EntreprisesComponent(entrepriseService, route) {
        this.entrepriseService = entrepriseService;
        this.route = route;
        this.entreprises = [];
    }
    EntreprisesComponent.prototype.ngOnInit = function () {
        this.getEnterprise();
    };
    EntreprisesComponent.prototype.getEnterprise = function () {
        var _this = this;
        this.entrepriseService
            .getEntreprises()
            .subscribe(function (res) { return (_this.entreprises = res); });
    };
    EntreprisesComponent.prototype.addEntreprise = function () {
        this.route.navigateByUrl("/entreprises/add");
    };
    EntreprisesComponent = __decorate([
        core_1.Component({
            selector: 'app-entreprises',
            templateUrl: './entreprises.component.html',
            styleUrls: ['./entreprises.component.sass']
        })
    ], EntreprisesComponent);
    return EntreprisesComponent;
}());
exports.EntreprisesComponent = EntreprisesComponent;
