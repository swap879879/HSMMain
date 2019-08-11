import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './Main.Component';
import { MainRoutingModule } from './Main.Routing';
import { AppComponent } from './Demo/app.component';
let MainModule = class MainModule {
};
MainModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            MainComponent, AppComponent
        ],
        imports: [
            BrowserModule, MainRoutingModule,
            BrowserAnimationsModule, NoopAnimationsModule
        ],
        exports: [],
        bootstrap: [MainComponent]
    })
], MainModule);
export { MainModule };
//# sourceMappingURL=Main.Module.js.map