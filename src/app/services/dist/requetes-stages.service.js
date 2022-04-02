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
exports.RequetesStagesService = void 0;
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var httpOptions = {
    headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json charset=utf-8' })
};
var RequetesStagesService = /** @class */ (function () {
    function RequetesStagesService(http) {
        this.http = http;
        this.requetesStagesUrl = 'https://projet-synthese-api.herokuapp.com/api/2096428/internship-request/';
    }
    // Fonction qui va récupérer la liste DES requêtes de stage
    RequetesStagesService.prototype.getRequetesStages = function () {
        return this.http.get(this.requetesStagesUrl);
    };
    // Fonction qui va révupérer UNE requête de stage en fonction de l'id
    RequetesStagesService.prototype.getRequeteStage = function (_id) {
        return this.http.get(this.requetesStagesUrl + _id);
    };
    // Fonction qui ajoute une requête de stage
    RequetesStagesService.prototype.addRequeteStage = function (requeteStage) {
        return this.http.post(this.requetesStagesUrl, requeteStage, httpOptions);
    };
    // Fonction qui modifie une requête de stage en fonction de l'id
    RequetesStagesService.prototype.editRequeteStage = function (requeteStage) {
        var req = __assign({}, requeteStage);
        delete req._id;
        return this.http.put(this.requetesStagesUrl + requeteStage._id, req, httpOptions);
    };
    // Fonction qui supprime une requête de stage en fonction de l'id
    RequetesStagesService.prototype.deleteRequeteStage = function (_id) {
        return this.http["delete"](this.requetesStagesUrl + _id);
    };
    RequetesStagesService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], RequetesStagesService);
    return RequetesStagesService;
}());
exports.RequetesStagesService = RequetesStagesService;
