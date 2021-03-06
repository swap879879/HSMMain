﻿import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { APP_BASE_HREF } from '@angular/common';
import { MainComponent } from './Main.Component'
import { MainRoutingModule } from './Main.Routing';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './Demo/app.component';
import { AppService } from './Demo/app.service';
import { ShareModule } from "./ShareModule";

 
@NgModule({
    declarations: [
        MainComponent, AppComponent
    ],
    imports: [
        ShareModule,
        BrowserModule,
        MainRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        NoopAnimationsModule        
    ],
    exports: [
        
    ],
    providers: [AppService],
    
    bootstrap: [MainComponent]
})
export class MainModule { }
