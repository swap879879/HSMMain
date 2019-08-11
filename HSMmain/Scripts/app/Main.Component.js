import * as tslib_1 from "tslib";
import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
let MainComponent = class MainComponent {
    constructor(document, elementRef) {
        this.document = document;
        this.elementRef = elementRef;
        this.title = 'DemoApp';
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
    }
};
MainComponent = tslib_1.__decorate([
    Component({
        selector: 'main-component',
        templateUrl: './HtmlPage.html',
    }),
    tslib_1.__param(0, Inject(DOCUMENT))
], MainComponent);
export { MainComponent };
//# sourceMappingURL=Main.Component.js.map