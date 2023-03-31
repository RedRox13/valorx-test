import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren:  () => import('./pages/list/list.module').then(m => m.ListModule)
  },
  {
    path: 'new-user',
    loadChildren:  () => import('./pages/contact-page/contact-page.module').then(m => m.ContactPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
