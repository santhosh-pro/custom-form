import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss']
})
export class PageOneComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder){
    this.form = this.formBuilder.group({
      name: [null,[Validators.required]]
     });
  }

  ngOnInit(): void {
  }

  submit() {
    alert(JSON.stringify(this.form.value));
  }

}
