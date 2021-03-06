﻿import { Component, OnInit, NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { ShareModule } from "../../ShareModule";
import { CommonVariable } from "../../CommonMethod";
import { MatTableDataSource } from "@angular/material";

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//#region Model
export class CountryMasModel {
    CountryId: number = 0;
    Country: string = "";
    CountryCode: number = 0;
}
//#endregion

@Injectable()
export class CountryStateCityMasService {

    constructor(private http: HttpClient) { }

    GetCountry(): Observable<string> {
        return this.http.get<string>("http://localhost:8081/CountryStateCity/GetCountry");
    }

    SaveCountry(CountryPt: any): Observable<string> {
        return this.http.post<string>("http://localhost:8081/CountryStateCity/SaveCountry", { Country: JSON.stringify(CountryPt) });
    }
}

@Component({
    selector: 'CountryStateCity-Mas',
    templateUrl: "../Views/CountryStateCityMas.html"
    
})

export class CountryStateCityMasComponent implements OnInit {

    CV: CommonVariable = new CommonVariable();
    public dtCountryMaster = new MatTableDataSource();
    CountryPt: CountryMasModel = new CountryMasModel();
    displayColumns = ['CountryCode', 'Country','Action']

    constructor(private _CountryStateCityMasService: CountryStateCityMasService) { }

    ngOnInit() {
        try {
            this.GetCountry();            
        }
        catch (ex) {
            alert(ex);
        } 
    }

    AddNewCountry(Operation: string) {
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
                else{
                    alert(Result.replace("0:", ""));
                }
            })
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
                    let tempData: any = JSON.parse(stringResult).Table;
                    if (tempData.length == 0) {
                        this.CV.ShowNoRecordFound = true;
                    }
                    else {
                        this.CV.ShowNoRecordFound = false;
                        this.dtCountryMaster.data = tempData;
                    }
                    //this.dtCountryMaster.data = JSON.parse(stringResult).Table;
                    this.CV.ShowSpinner = false; }, 4000)
               
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
        } catch (ex) {
            alert(ex);
        }
    }

    EditCountry(CurrentData) {
        try {
            this.CountryPt = Object.assign({}, CurrentData);
            this.CV.EnableEditFunctionality();
        } catch (ex) {
            alert(ex);
        }
    }

    DeleteCountry(CurrentData) {
        try {
            this.CountryPt = Object.assign({}, CurrentData);
            this.CV.EnableDeletFunctionality();
        } catch (ex) {
            alert(ex);
        }
    }

    ClearData() {
        this.CountryPt.CountryCode = 0;
        this.CountryPt.Country = "";
    }
}


const routes: Routes = [
    {
        path: '', component: CountryStateCityMasComponent
    }
];

export class CountryStateCityMasRouting { }


@NgModule({
    declarations: [
        CountryStateCityMasComponent
    ],
    imports: [ShareModule, RouterModule.forChild(routes)],
    exports: [
        
    ],
    providers: [CountryStateCityMasService],

    bootstrap: [CountryStateCityMasComponent]
})
export class CountryStateCityMasModule { }