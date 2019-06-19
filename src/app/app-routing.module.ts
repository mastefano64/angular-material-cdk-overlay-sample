import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './component/home/home.component';
import { PageOverlay1Component } from './component/overlay1/pageoverlay1/pageoverlay1.component';
import { PageOverlay2Component } from './component/overlay2/pageoverlay2/pageoverlay2.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'pageoverlay1', component: PageOverlay1Component },
  { path: 'pageoverlay2', component: PageOverlay2Component },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
