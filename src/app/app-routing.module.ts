import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'concept',
    loadChildren: () => import('./concepts/concepts.module').then((m) => m.ConceptsModule)
  },
  {
    path: '**',
    redirectTo: 'concept',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
