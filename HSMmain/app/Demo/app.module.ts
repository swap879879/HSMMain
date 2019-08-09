import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { AppRoutingModule } from './app-routing.module';
///import { AppComponent } from './app.component';
import { MatInputModule, MatFormFieldModule } from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
      
  ],
  imports: [     
     MatInputModule, MatFormFieldModule, BrowserAnimationsModule, NoopAnimationsModule
    ],
    exports: [
        MatInputModule, MatFormFieldModule
    ],
    bootstrap: []
    
})
export class AppModule { }
