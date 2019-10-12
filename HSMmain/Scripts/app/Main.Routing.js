import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
const routes = [
    {
        path: 'product',
        //  component: AppComponent
        //loadChildren: "./Masters/Component/CoutryStateCity#CountryStateCityMasModule"
        loadChildren: () => import('./Masters/Component/CoutryStateCity').then(mod => mod.CountryStateCityMasModule)
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '*'
    }
];
let MainRoutingModule = class MainRoutingModule {
};
MainRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes, { useHash: true })],
        exports: [RouterModule]
    })
], MainRoutingModule);
export { MainRoutingModule };
//# sourceMappingURL=Main.Routing.js.map