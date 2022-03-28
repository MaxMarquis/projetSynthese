"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DernieresOffresComponent = void 0;
var core_1 = require("@angular/core");
var DernieresOffresComponent = /** @class */ (function () {
    function DernieresOffresComponent(OffresStagesService, router, modalService) {
        this.OffresStagesService = OffresStagesService;
        this.router = router;
        this.modalService = modalService;
        this.offresStages = [];
    }
    DernieresOffresComponent.prototype.ngOnInit = function () {
        this.getOffresstages();
    };
    /// Function get requetes_stages
    DernieresOffresComponent.prototype.getOffresstages = function () {
        var _this = this;
        this.OffresStagesService.getOffresStages().subscribe(function (res) { return (_this.offresStages = res); });
    };
    /// Function Delete requetes_stages
    DernieresOffresComponent.prototype.onDelete = function (Offresstages) {
        var _this = this;
        this.OffresStagesService.deleteOffreStage(Offresstages._id).subscribe(function (_result) {
            return (_this.offresStages = _this.offresStages.filter(function (p) { return p !== Offresstages; }));
        });
    };
    DernieresOffresComponent.prototype.offerStatus = function (offresstage, active) {
        this.OffresStagesService.editOffreStage(__assign(__assign({}, offresstage), { active: active })).subscribe(function (_result) {
            offresstage.active = active;
        });
    };
    DernieresOffresComponent.prototype.editOffresstages = function () {
        this.router.navigateByUrl('/offres-de-stages/edit');
    };
    /// Modal suppression
    DernieresOffresComponent.prototype.open = function (content, offresStage) {
        var _this = this;
        this.modalService
            .open(content, { ariaLabelledBy: 'titremodal' })
            .result.then(function (result) {
            if (result === 'Delete') {
                _this.onDelete(offresStage);
            }
        }, function (reason) { });
    };
    DernieresOffresComponent = __decorate([
        core_1.Component({
            selector: 'app-dernieres-offres',
            templateUrl: './dernieres-offres.component.html',
            styleUrls: ['./dernieres-offres.component.sass']
        })
    ], DernieresOffresComponent);
    return DernieresOffresComponent;
}());
exports.DernieresOffresComponent = DernieresOffresComponent;
