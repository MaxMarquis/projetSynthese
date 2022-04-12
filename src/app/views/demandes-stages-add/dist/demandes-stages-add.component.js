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
    function DemandesStagesAddComponent(activityService) {
        this.activityService = activityService;
        this.activitySectors = [];
        this.requeteStage = {
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
            active: false,
            region: '',
            activitySector: '',
            city: '',
            linkToResume: ''
        };
    }
    DemandesStagesAddComponent.prototype.ngOnInit = function () {
        this.getActivities();
    };
    DemandesStagesAddComponent.prototype.getActivities = function () {
        var _this = this;
        this.activityService
            .getSecteursActivites()
            .subscribe(function (res) { return (_this.activitySectors = res); });
    };
    // Event qui est appelé quand on clique sur une checkbox
    DemandesStagesAddComponent.prototype.checkPaid = function (data) {
        var ref = this.requeteStage.paid.find(function (x) { return x == data; });
        if (ref == data) {
            return true;
        }
        else {
            return false;
        }
    };
    // Lors qu'on coche une checkbox soit on push la value dans l'array paid soit on le splice(supprime)
    DemandesStagesAddComponent.prototype.onCheckboxChange = function (event) {
        var _this = this;
        var _a;
        if (event) {
            var value_1 = (_a = event.currentTarget) === null || _a === void 0 ? void 0 : _a.getAttribute("name");
            if (event.currentTarget.checked) {
                this.requeteStage.paid.push(value_1);
                console.log(this.requeteStage.paid);
            }
            else {
                this.requeteStage.paid.forEach(function (element, index) {
                    if (element == value_1)
                        _this.requeteStage.paid.splice(index, 1);
                    console.log(_this.requeteStage.paid);
                });
            }
        }
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
