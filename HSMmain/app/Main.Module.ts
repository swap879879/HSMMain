import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { APP_BASE_HREF } from '@angular/common';
import { MainComponent } from './Main.Component'
import { MainRoutingModule } from './Main.Routing';
import { AppModule} from './Demo/app.module'
 
@NgModule({
    declarations: [
        MainComponent 
    ],
    imports: [
        BrowserModule, MainRoutingModule ,
        BrowserAnimationsModule, NoopAnimationsModule, AppModule    ],
    exports: [
        MainComponent
    ],
    
    bootstrap: [MainComponent]
})
export class MainModule { }
