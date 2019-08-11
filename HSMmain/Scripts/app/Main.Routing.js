import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './Demo/app.component';
const routes = [
    {
        path: 'product',
        //   loadChildren: "./Demo/app.module#AppModule"
        //loadChildren:() => import('./Demo/app.module').then(mod => mod.AppModule)
        component: AppComponent
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '*'
    }
];
let MainRoutingModule = class MainRoutingModule {
};
MainRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], MainRoutingModule);
export { MainRoutingModule };
//# sourceMappingURL=Main.Routing.js.map