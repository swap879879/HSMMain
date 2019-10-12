import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './Demo/app.component';


const routes: Routes = [
    {
        path: 'product',
      //  component: AppComponent
        //loadChildren: "./Masters/Component/CoutryStateCity#CountryStateCityMasModule"
        loadChildren: () => import('./Masters/Component/CoutryStateCity').then(mod => mod.CountryStateCityMasModule)
    },
   
    {
        path: '',
        pathMatch:'full',
        redirectTo:'*'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes,{ useHash: true })],
    exports: [RouterModule]
})
export class MainRoutingModule { }
