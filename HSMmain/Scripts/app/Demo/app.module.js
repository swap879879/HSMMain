import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
//import { AppRoutingModule } from './app-routing.module';
///import { AppComponent } from './app.component';
import { MatInputModule, MatFormFieldModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    NgModule({
        declarations: [],
        imports: [
            MatInputModule, MatFormFieldModule, BrowserAnimationsModule, NoopAnimationsModule
        ],
        exports: [
            MatInputModule, MatFormFieldModule
        ],
        bootstrap: []
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map