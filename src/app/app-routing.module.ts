import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';

const routes: Routes = [
  {
    path:'one',
    component:PageOneComponent,
    data: { breadcrumb: 'One' },
    children:[
      {
        path:'two',
        component:PageTwoComponent,
        data: { breadcrumb: 'Two' },
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
