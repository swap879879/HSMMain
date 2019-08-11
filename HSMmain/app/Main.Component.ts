
import { Component, OnInit, AfterViewInit, ElementRef, Inject } from '@angular/core';
import { MatInput, MatFormField } from '@angular/material'
import { DOCUMENT } from '@angular/common';

@Component({
    
    selector: 'main-component',

    templateUrl: './HtmlPage.html',
   

    

})
export class MainComponent implements OnInit, AfterViewInit  {
    title = 'DemoApp';

    constructor(@Inject(DOCUMENT) private document, private elementRef: ElementRef){}

    ngOnInit() {
        
    }

    ngAfterViewInit() {
    
    }
}
