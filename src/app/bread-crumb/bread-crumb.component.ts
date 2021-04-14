import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { BreadCrumb } from './bread-crumb';
import { BreadCrumbService } from './bread-crumb.service';

@Component({
  selector: 'app-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.scss']
})
export class BreadCrumbComponent{

  breadcrumbs$: Observable<BreadCrumb[]>;

  constructor(private readonly breadCrumbService: BreadCrumbService) {
    this.breadcrumbs$ = breadCrumbService.breadcrumbs$;
  }
}
