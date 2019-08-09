import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { APP_BASE_HREF } from '@angular/common';
import { MainComponent } from './Main.Component'
import { MainRoutingModule } from './Main.Routing';
import { AppComponent } from './Demo/app.component';



 
@NgModule({
    declarations: [
        MainComponent, AppComponent
    ],
    imports: [
        BrowserModule, MainRoutingModule ,
        BrowserAnimationsModule, NoopAnimationsModule    ],
    exports: [
        
    ],
    
    bootstrap: [MainComponent]
})
export class MainModule { }
