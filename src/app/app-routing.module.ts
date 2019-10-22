import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// page
import { RouterLinkPageComponent } from './components/router-link-page/router-link-page.component';

const routes: Routes = [
  {
    path: 'test',
    component: RouterLinkPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
