import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './Demo/app.component';

const routes: Routes = [
    {
        path: 'product',
     //   loadChildren: "./Demo/app.module#AppModule"
        //loadChildren:() => import('./Demo/app.module').then(mod => mod.AppModule)
       component: AppComponent
    },
   
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule { }
