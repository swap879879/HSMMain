import { __decorate } from "tslib";
import { Component, NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { ShareModule } from "../../ShareModule";
import { CommonVariable } from "../../CommonMethod";
import { MatTableDataSource } from "@angular/material";
import { Injectable } from '@angular/core';
//#region Model
export class CountryMasModel {
    constructor() {
        this.CountryId = 0;
        this.Country = "";
        this.CountryCode = 0;
    }
}
//#endregion
let CountryStateCityMasService = class CountryStateCityMasService {
    constructor(http) {
        this.http = http;
    }
    GetCountry() {
        return this.http.get("http://localhost:8081/CountryStateCity/GetCountry");
    }
    SaveCountry(CountryPt) {
        return this.http.post("http://localhost:8081/CountryStateCity/SaveCountry", { Country: JSON.stringify(CountryPt) });
    }
};
CountryStateCityMasService = __decorate([
    Injectable()
], CountryStateCityMasService);
export { CountryStateCityMasService };
let CountryStateCityMasComponent = class CountryStateCityMasComponent {
    constructor(_CountryStateCityMasService) {
        this._CountryStateCityMasService = _CountryStateCityMasService;
        this.CV = new CommonVariable();
        this.dtCountryMaster = new MatTableDataSource();
        this.CountryPt = new CountryMasModel();
        this.displayColumns = ['CountryCode', 'Country', 'Action'];
    }
    ngOnInit() {
        try {
            this.GetCountry();
        }
        catch (ex) {
            alert(ex);
        }
    }
    AddNewCountry(Operation) {
        try {
            if (Operation == "Add") {
                this.ClearData();
                this.CV.EnableAddFunctionality();
            }
            else {
                this.ClearData();
                this.CV.EnableBackFunctionality();
            }
        }
        catch (ex) {
            alert(ex);
        }
    }
    SaveCountry() {
        try {
            this._CountryStateCityMasService.SaveCountry(this.CountryPt).subscribe((Result) => {
                if (Result.includes("1:")) {
                    alert(Result.replace("1:", ""));
                    this.GetCountry();
                }
                else {
                    alert(Result.replace("0:", ""));
                }
            });
        }
        catch (ex) {
            alert(ex);
        }
    }
    GetCountry() {
        try {
            this.CV.ShowSpinner = true;
            this._CountryStateCityMasService.GetCountry().subscribe((stringResult) => {
                setTimeout(() => {
                    let tempData = JSON.parse(stringResult).Table;
                    if (tempData.length == 0) {
                        this.CV.ShowNoRecordFound = true;
                    }
                    else {
                        this.CV.ShowNoRecordFound = false;
                        this.dtCountryMaster.data = tempData;
                    }
                    //this.dtCountryMaster.data = JSON.parse(stringResult).Table;
                    this.CV.ShowSpinner = false;
                }, 4000);
            });
        }
        catch (ex) {
            alert(ex);
        }
    }
    ViewCountry(CurrentData) {
        try {
            this.CountryPt = Object.assign({}, CurrentData);
            this.CV.EnableViewFunctionality();
        }
        catch (ex) {
            alert(ex);
        }
    }
    EditCountry(CurrentData) {
        try {
            this.CountryPt = Object.assign({}, CurrentData);
            this.CV.EnableEditFunctionality();
        }
        catch (ex) {
            alert(ex);
        }
    }
    DeleteCountry(CurrentData) {
        try {
            this.CountryPt = Object.assign({}, CurrentData);
            this.CV.EnableDeletFunctionality();
        }
        catch (ex) {
            alert(ex);
        }
    }
    ClearData() {
        this.CountryPt.CountryCode = 0;
        this.CountryPt.Country = "";
    }
};
CountryStateCityMasComponent = __decorate([
    Component({
        selector: 'CountryStateCity-Mas',
        templateUrl: "../Views/CountryStateCityMas.html"
    })
], CountryStateCityMasComponent);
export { CountryStateCityMasComponent };
const routes = [
    {
        path: '', component: CountryStateCityMasComponent
    }
];
export class CountryStateCityMasRouting {
}
let CountryStateCityMasModule = class CountryStateCityMasModule {
};
CountryStateCityMasModule = __decorate([
    NgModule({
        declarations: [
            CountryStateCityMasComponent
        ],
        imports: [ShareModule, RouterModule.forChild(routes)],
        exports: [],
        providers: [CountryStateCityMasService],
        bootstrap: [CountryStateCityMasComponent]
    })
], CountryStateCityMasModule);
export { CountryStateCityMasModule };
//# sourceMappingURL=CoutryStateCity.js.map