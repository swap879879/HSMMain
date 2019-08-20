import { Component, OnInit, NgModule } from "@angular/core";
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
}
//#endregion

@Injectable()
export class CountryStateCityMasService {

    constructor(private http: HttpClient) { }

    GetCountry(): Observable<string> {
        return this.http.get<string>("http://localhost:8081/CountryStateCity/GetCountry");
    }
}

@Component({
    selector: 'CountryStateCity-Mas',
    templateUrl: "../Views/CountryStateCityMas.html"
    
})

export class CountryStateCityMasComponent implements OnInit {

    CV: CommonVariable = new CommonVariable();
    public dtCountryMaster = new MatTableDataSource();
    displayColumns = ['CountryCode', 'Country']

    constructor(private _CountryStateCityMasService: CountryStateCityMasService) { }

    ngOnInit() {
        try {
            alert('es');
            this.GetCountry();            
        }
        catch (ex) {
            alert(ex);
        } 
    }

    GetCountry() {
        try {
            this._CountryStateCityMasService.GetCountry().subscribe((stringResult) => {
                console.log(stringResult);
                this.dtCountryMaster.data = JSON.parse(stringResult).Table;
            });
        }
        catch (ex) {
            alert(ex);
        }
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