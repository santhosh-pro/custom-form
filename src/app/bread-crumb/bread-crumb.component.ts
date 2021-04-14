import { Component, Input, OnInit } from '@angular/core';
import { BreadCrumb } from './bread-crumb';

@Component({
  selector: 'app-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.scss']
})
export class BreadCrumbComponent implements OnInit {

  @Input() values:BreadCrumb[];
  constructor() { }

  ngOnInit(): void {
  }

}
