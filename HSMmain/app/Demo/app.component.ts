import { Component, OnInit } from '@angular/core';
import { MatInput, MatFormField } from '@angular/material';
import { AppService } from './app.service';

@Component({
    selector: 'app-root',
    template: `<h1>Tesr</h1>

`,
    styles:[`.example-form {
  min-width: 150px;
  max-width: 500px;
  width: 100%;
}

.example-full-width {
  width: 100%;
}`]

  
})
export class AppComponent implements OnInit {
    title = 'DemoApp';

    constructor(private _AppService: AppService) { }

    ngOnInit() {
        this.getdata();
    }

    getdata() {
        this._AppService.getConfig().subscribe(x => {
            alert(x);
        })
    }
}
