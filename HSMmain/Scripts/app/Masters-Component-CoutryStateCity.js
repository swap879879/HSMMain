(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Masters-Component-CoutryStateCity"],{

/***/ "./app/CommonMethod.ts":
/*!*****************************!*\
  !*** ./app/CommonMethod.ts ***!
  \*****************************/
/*! exports provided: CommonVariable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonVariable", function() { return CommonVariable; });
class CommonVariable {
    constructor() {
        this.ShowMatTable = true;
        this.ShowPanel = false;
        this.ShowSpinner = false;
        this.ShowNoRecordFound = false;
        this.IsDisable = false;
        this.IsDisableSave = false;
        this.Operation = "Add";
    }
    EnableAddFunctionality() {
        this.IsDisable = false;
        this.ShowMatTable = false;
        this.ShowPanel = true;
        this.ShowSpinner = false;
        this.ShowNoRecordFound = false;
        this.IsDisableSave = false;
        this.Operation = "Add";
    }
    EnableBackFunctionality() {
        this.IsDisable = false;
        this.ShowMatTable = true;
        this.ShowPanel = false;
        this.ShowSpinner = false;
        this.ShowNoRecordFound = false;
        this.IsDisableSave = false;
        this.Operation = "Back";
    }
    EnableViewFunctionality() {
        this.IsDisable = true;
        this.ShowMatTable = false;
        this.ShowPanel = true;
        this.ShowSpinner = false;
        this.ShowNoRecordFound = false;
        this.IsDisableSave = true;
        this.Operation = "View";
    }
    EnableEditFunctionality() {
        this.IsDisable = false;
        this.ShowMatTable = false;
        this.ShowPanel = true;
        this.ShowSpinner = false;
        this.ShowNoRecordFound = false;
        this.IsDisableSave = false;
        this.Operation = "Edit";
    }
    EnableDeletFunctionality() {
        this.IsDisable = true;
        this.ShowMatTable = false;
        this.ShowPanel = true;
        this.ShowSpinner = false;
        this.ShowNoRecordFound = false;
        this.IsDisableSave = false;
        this.Operation = "Delete";
    }
}


/***/ }),

/***/ "./app/Masters/Component/CoutryStateCity.ts":
/*!**************************************************!*\
  !*** ./app/Masters/Component/CoutryStateCity.ts ***!
  \**************************************************/
/*! exports provided: CountryMasModel, CountryStateCityMasService, CountryStateCityMasComponent, CountryStateCityMasRouting, CountryStateCityMasModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryMasModel", function() { return CountryMasModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryStateCityMasService", function() { return CountryStateCityMasService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryStateCityMasComponent", function() { return CountryStateCityMasComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryStateCityMasRouting", function() { return CountryStateCityMasRouting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryStateCityMasModule", function() { return CountryStateCityMasModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ShareModule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ShareModule */ "./app/ShareModule.ts");
/* harmony import */ var _CommonMethod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../CommonMethod */ "./app/CommonMethod.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");








//#region Model
class CountryMasModel {
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
CountryStateCityMasService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }
];
CountryStateCityMasService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], CountryStateCityMasService);

let CountryStateCityMasComponent = class CountryStateCityMasComponent {
    constructor(_CountryStateCityMasService) {
        this._CountryStateCityMasService = _CountryStateCityMasService;
        this.CV = new _CommonMethod__WEBPACK_IMPORTED_MODULE_4__["CommonVariable"]();
        this.dtCountryMaster = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"]();
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
CountryStateCityMasComponent.ctorParameters = () => [
    { type: CountryStateCityMasService }
];
CountryStateCityMasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'CountryStateCity-Mas',
        template: __webpack_require__(/*! raw-loader!../Views/CountryStateCityMas.html */ "./node_modules/raw-loader/index.js!./app/Masters/Views/CountryStateCityMas.html")
    })
], CountryStateCityMasComponent);

const routes = [
    {
        path: '', component: CountryStateCityMasComponent
    }
];
class CountryStateCityMasRouting {
}
let CountryStateCityMasModule = class CountryStateCityMasModule {
};
CountryStateCityMasModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            CountryStateCityMasComponent
        ],
        imports: [_ShareModule__WEBPACK_IMPORTED_MODULE_3__["ShareModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [],
        providers: [CountryStateCityMasService],
        bootstrap: [CountryStateCityMasComponent]
    })
], CountryStateCityMasModule);



/***/ }),

/***/ "./node_modules/raw-loader/index.js!./app/Masters/Views/CountryStateCityMas.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./app/Masters/Views/CountryStateCityMas.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"customClass rounded\">\r\n    <div class=\"customPageClass\">\r\n        <div class=\"PageHeader\">\r\n            <h3>Contry-State-City Master</h3>\r\n        </div>\r\n        <div class=\"PageBodyClass\">\r\n          <mat-tab-group class=\"mat-background-primary\">\r\n              <mat-tab label=\"Country Master\"> \r\n                  <div class=\"btnAddBack\">                     \r\n                          <button mat-raised-button color=\"primary\" (click)=\"AddNewCountry(CV.ShowMatTable ? 'Add' : 'Back')\">\r\n                              <ng-template  [ngIf]=\"CV.ShowMatTable\" [ngIfElse]=\"ShowBackButton\">\r\n                                 Add New Country\r\n                              </ng-template>\r\n                              <ng-template #ShowBackButton>\r\n                                 Back\r\n                              </ng-template>\r\n                          </button>                      \r\n                  </div>                                   \r\n                  <div *ngIf=\"CV.ShowMatTable\">\r\n                      <div *ngIf=\"dtCountryMaster.data.length == 0 && CV.ShowSpinner\">\r\n                          <mat-card>\r\n                              <mat-card-content>\r\n                                  <div class=\"text-center\">\r\n                                      <div class=\"spinner-grow text-primary\" role=\"status\">\r\n                                          <span class=\"sr-only\">Loading...</span>\r\n                                      </div>\r\n                                      <div class=\"spinner-grow text-secondary\" role=\"status\">\r\n                                          <span class=\"sr-only\">Loading...</span>\r\n                                      </div>\r\n                                      <div class=\"spinner-grow text-success\" role=\"status\">\r\n                                          <span class=\"sr-only\">Loading...</span>\r\n                                      </div>\r\n                                      <div class=\"spinner-grow text-danger\" role=\"status\">\r\n                                          <span class=\"sr-only\">Loading...</span>\r\n                                      </div>\r\n                                      <div class=\"spinner-grow text-warning\" role=\"status\">\r\n                                          <span class=\"sr-only\">Loading...</span>\r\n                                      </div>\r\n                                      <div class=\"spinner-grow text-info\" role=\"status\">\r\n                                          <span class=\"sr-only\">Loading...</span>\r\n                                      </div>\r\n                                      <div class=\"spinner-grow text-light\" role=\"status\">\r\n                                          <span class=\"sr-only\">Loading...</span>\r\n                                      </div>\r\n                                      <div class=\"spinner-grow text-dark\" role=\"status\">\r\n                                          <span class=\"sr-only\">Loading...</span>\r\n                                      </div>\r\n                                  </div>\r\n                              </mat-card-content>\r\n                          </mat-card>\r\n\r\n                      </div>\r\n\r\n                      <div *ngIf=\"dtCountryMaster.data.length > 0\">\r\n                          <mat-table #table [dataSource]=\"dtCountryMaster\">\r\n                              <ng-container matColumnDef=\"CountryCode\">\r\n                                  <mat-header-cell *matHeaderCellDef>Country Code</mat-header-cell>\r\n                                  <mat-cell *matCellDef=\"let element\">{{element.CountryCode}}</mat-cell>\r\n                              </ng-container>\r\n                              <ng-container matColumnDef=\"Country\">\r\n                                  <mat-header-cell *matHeaderCellDef>Country</mat-header-cell>\r\n                                  <mat-cell *matCellDef=\"let element\">{{element.Country}}</mat-cell>\r\n                              </ng-container>\r\n                              <ng-container matColumnDef=\"Action\">\r\n                                  <mat-header-cell *matHeaderCellDef></mat-header-cell>\r\n                                  <mat-cell *matCellDef=\"let element\">\r\n                                      <div style=\"margin-right:15px\">\r\n                                          <button mat-icon-button (click)=\"ViewCountry(element)\"   matTooltip=\"View Country\">\r\n                                              <i class='fas fa-eye' style='font-size:x-large;color:greenyellow;cursor:pointer;'></i>\r\n                                          </button>\r\n                                      </div>\r\n                                      <div style=\"margin-right:15px\">\r\n                                          <button mat-icon-button (click)=\"EditCountry(element)\"   matTooltip=\"Edit Country\">\r\n                                              <i class='fas fa-edit' style='font-size:x-large;color:cornflowerblue;cursor:pointer;'></i>\r\n                                          </button>\r\n                                      </div>\r\n                                      <div style=\"margin-right:15px\">\r\n                                          <button mat-icon-button (click)=\"DeleteCountry(element)\"   matTooltip=\"Delete Country\">\r\n                                              <i class='fas fa-trash-alt' style='font-size:x-large;color:red;cursor:pointer;'></i>\r\n                                          </button>\r\n                                      </div>\r\n                                  </mat-cell>\r\n                              </ng-container>\r\n\r\n                              <mat-header-row *matHeaderRowDef=\"displayColumns\"></mat-header-row>\r\n                              <mat-row *matRowDef=\"let row; columns:displayColumns;\"></mat-row>\r\n                          </mat-table>\r\n                     </div>\r\n\r\n                      <div *ngIf=\"dtCountryMaster.data.length == 0 && CV.ShowNoRecordFound\">\r\n                          <mat-card>\r\n                              <mat-card-content>                                  \r\n                                 <div class=\"text-center\">\r\n                                     <h1>No Records Found</h1>\r\n                                 </div>\r\n                              </mat-card-content>\r\n                          </mat-card>\r\n                      </div>\r\n                 </div>\r\n                  <div *ngIf=\"!CV.ShowMatTable\">\r\n                      <div class=\"card\">\r\n                          <div class=\"card-header \">\r\n                              Add New Country\r\n                          </div>\r\n                          <div class=\"card-body\">\r\n                              <div>\r\n                                  <form class=\"AddCountryForm\" #AddCountryForm=\"ngForm\" >\r\n                                      <div class=\"container\">\r\n                                          <mat-form-field>\r\n                                              <input [disabled]=\"CV.IsDisable\" matInput placeholder=\"Country\" required id=\"Country\" name=\"Country\" [(ngModel)]=\"CountryPt.Country\">\r\n                                              <mat-error>\r\n                                                  Please Enter Country\r\n                                              </mat-error>\r\n                                          </mat-form-field>\r\n                                      </div>\r\n                                      <div class=\"container\">\r\n                                          <mat-form-field>\r\n                                              <input  [disabled]=\"CV.IsDisable\" matInput placeholder=\"CountryCode\" required id=\"CountryCode\" name=\"CountryCode\" [(ngModel)]=\"CountryPt.CountryCode\">\r\n                                              <mat-error>\r\n                                                  Please Enter Country Code\r\n                                              </mat-error>\r\n                                          </mat-form-field>\r\n                                      </div>\r\n                                  </form>\r\n                              </div>\r\n                          </div>\r\n                          <div class=\"card-footer\">\r\n                              <button mat-raised-button color=\"primary\"  [disabled]=\"CV.IsDisableSave || AddCountryForm.form.invalid\" (click)=\"SaveCountry()\">\r\n                                  Save\r\n                              </button>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n              </mat-tab>\r\n              <mat-tab label=\"State Master\">\r\n                  <div><i class='fas fa-edit' style='font-size:48px;color:cornflowerblue;cursor:pointer'></i></div> \r\n              </mat-tab>\r\n              <mat-tab label=\"City Master\">\r\n                  <div>Country Master</div> \r\n              </mat-tab>\r\n          </mat-tab-group>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ })

}]);
//# sourceMappingURL=Masters-Component-CoutryStateCity.js.map