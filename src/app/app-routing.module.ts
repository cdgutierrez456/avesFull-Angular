import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BirdInfoComponent } from './bird-info/bird-info.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/bird' },
  { path: 'bird', component: BirdInfoComponent },
  { path: '**', redirectTo: 'bird' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
