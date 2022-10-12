import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';


const routes: Routes = [
  {
    path: 'detail',
    loadChildren: () => import('./items/items.module').then(m => m.ItemsModule)
  },
  {
    path: '',
    component: HomePage
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
