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
exports.OffresStagesService = void 0;
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var httpOptions = {
    headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' })
};
var OffresStagesService = /** @class */ (function () {
    function OffresStagesService(http) {
        this.http = http;
        this.offresStagesUrl = 'https://projet-synthese-api.herokuapp.com/api/2096428/internship-offer/';
    }
    // Fonction qui va récupérer la liste DES offres de stage
    OffresStagesService.prototype.getOffresStages = function () {
        return this.http.get(this.offresStagesUrl);
    };
    // Fonction qui va récupérer UN SEUL offre de stage
    OffresStagesService.prototype.getOffreStage = function (_id) {
        return this.http.get(this.offresStagesUrl + _id);
    };
    // Fonction qui ajoute une offre de stage
    OffresStagesService.prototype.addOffreStage = function (offreStage) {
        return this.http.post(this.offresStagesUrl, offreStage, httpOptions);
    };
    // Fonction qui modifie une offre de stage
    OffresStagesService.prototype.editOffreStage = function (offreStage) {
        var req = __assign({}, offreStage);
        delete req._id;
        return this.http.put(this.offresStagesUrl + offreStage._id, req, httpOptions);
    };
    // Fonction qui supprime une offre de stage
    OffresStagesService.prototype.deleteOffreStage = function (_id) {
        return this.http["delete"](this.offresStagesUrl + _id);
    };
    OffresStagesService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], OffresStagesService);
    return OffresStagesService;
}());
exports.OffresStagesService = OffresStagesService;
