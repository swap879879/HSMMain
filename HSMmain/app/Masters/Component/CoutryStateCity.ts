import { Component, OnInit, NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from "@angular/material";

 
export class CountryMasModel {
    CountryId: number = 0;
    Country: string = "";
}



@Component({
    selector: 'CountryStateCity-Mas',
    templateUrl: "../Views/CountryStateCityMas.html"
})

export class CountryStateCityMasComponent implements OnInit {
    ngOnInit() {
        try {
            alert('es')
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
    imports: [CommonModule, MatCardModule, RouterModule.forChild(routes)],
    exports: [
        MatCardModule
    ],
    providers: [],

    bootstrap: [CountryStateCityMasComponent]
})
export class CountryStateCityMasModule { }