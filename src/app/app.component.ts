import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.form = this.formBuilder.group({
      name: [null]
     });
  }

  submit() {
    alert(JSON.stringify(this.form.value));
  }
}
