import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatInputModule, MatFormFieldModule } from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [     
      AppRoutingModule,
      MatInputModule, MatFormFieldModule, BrowserAnimationsModule, NoopAnimationsModule
    ],
    exports: [
        MatInputModule, MatFormFieldModule
    ],
    bootstrap: [AppComponent]
    
})
export class AppModule { }
