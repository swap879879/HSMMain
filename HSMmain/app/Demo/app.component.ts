import { Component } from '@angular/core';
import { MatInput, MatFormField } from '@angular/material'

@Component({
    selector: 'app-root',
    template: `<form class="example-form">
<div>
  <mat-form-field class="example-full-width">
    <input matInput placeholder="Favorite food" value="Sushi">
  </mat-form-field>

  <mat-form-field class="example-full-width">
    <textarea matInput placeholder="Leave a comment"></textarea>
  </mat-form-field>
</div>
</form>

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
export class AppComponent {
  title = 'DemoApp';
}
