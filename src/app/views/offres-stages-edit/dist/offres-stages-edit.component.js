"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.OffresStagesEditComponent = void 0;
var core_1 = require("@angular/core");
var OffresStagesEditComponent = /** @class */ (function () {
    function OffresStagesEditComponent(activeRoute, offreStagesService) {
        this.activeRoute = activeRoute;
        this.offreStagesService = offreStagesService;
        this.offreStage = {
            _id: '',
            title: '',
            description: '',
            enterprise: "",
            startDate: new Date(),
            endDate: new Date(),
            program: '',
            requirements: '',
            stageType: '',
            hoursPerWeek: 0,
            additionalInfo: '',
            paid: [],
            skills: [],
            published: false,
            active: false
        };
    }
    OffresStagesEditComponent.prototype.ngOnInit = function () {
        // stageId va récupérer l'id dans l'url
        var stageId = String(this.activeRoute.snapshot.paramMap.get('id'));
        console.log('Id Recu: ' + stageId);
        this.getOffreStage(stageId);
    };
    // Fonction qui va récupérer l'offre de stage dans la base de données en fonction de l'id
    OffresStagesEditComponent.prototype.getOffreStage = function (id) {
        var _this = this;
        this.offreStagesService
            .getOffreStage(id)
            .subscribe(function (res) { return (_this.offreStage = res); });
    };
    // Event qui est appelé quand on clique sur une checkbox
    OffresStagesEditComponent.prototype.checkPaid = function (data) {
        var ref = this.offreStage.paid.find(function (x) { return x == data; });
        if (ref == data) {
            return true;
        }
        else {
            return false;
        }
    };
    // Lors qu'on coche une checkbox soit on push la value dans l'array paid soit on le splice(supprime)
    OffresStagesEditComponent.prototype.onCheckboxChange = function (event) {
        var _this = this;
        var _a;
        if (event) {
            var value_1 = (_a = event.currentTarget) === null || _a === void 0 ? void 0 : _a.getAttribute("name");
            if (event.currentTarget.checked) {
                this.offreStage.paid.push(value_1);
                console.log(this.offreStage.paid);
            }
            else {
                this.offreStage.paid.forEach(function (element, index) {
                    if (element == value_1)
                        _this.offreStage.paid.splice(index, 1);
                    console.log(_this.offreStage.paid);
                });
            }
        }
    };
    OffresStagesEditComponent = __decorate([
        core_1.Component({
            selector: 'app-offres-stages-edit',
            templateUrl: './offres-stages-edit.component.html',
            styleUrls: ['./offres-stages-edit.component.sass']
        })
    ], OffresStagesEditComponent);
    return OffresStagesEditComponent;
}());
exports.OffresStagesEditComponent = OffresStagesEditComponent;
