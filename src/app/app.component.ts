import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BreadCrumb } from './bread-crumb/bread-crumb';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  form: FormGroup;

  breadCrumbValues:BreadCrumb[];
  constructor(private formBuilder: FormBuilder){
    this.form = this.formBuilder.group({
      name: [null]
     });
  }
  ngOnInit(): void {
    this.breadCrumbValues=[
      {
        name:'One',
        route:'/one',
        isActive:false
      },
      {
        name:'Two',
        route:'/two',
        isActive:true
      },
      {
        name:'Three',
        route:'/three',
        isActive:false
      }
    ]
  }

  submit() {
    alert(JSON.stringify(this.form.value));
  }
}
