import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from './app.material.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { PageOverlay1Component } from './component/overlay1/pageoverlay1/pageoverlay1.component';
import { PageOverlay2Component } from './component/overlay2/pageoverlay2/pageoverlay2.component';
import { PageSubjectComponent } from './component/subject/pagesubject/pagesubject.component';
import { CompSubjectComponent } from './component/subject/compsubject/compsubject.component';
import { PhotoZoomComponent } from './component/overlay1/photozoom/photozoom.component';
import { OverlayPanelOutComponent } from './component/overlay2/overlaypanel/overlaypanelout.component';
import { OverlayPanelInComponent } from './component/overlay2/overlaypanel/overlaypanelin.component';
import { PhotoZoomDirective } from './directive/photozoom.directive';

import { SubjectNotifyService } from './service/SubjectNotify.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageOverlay1Component,
    PageOverlay2Component,
    PageSubjectComponent,
    PhotoZoomComponent,
    OverlayPanelOutComponent,
    OverlayPanelInComponent,
    CompSubjectComponent,
    PhotoZoomDirective
  ],
  entryComponents: [
    PhotoZoomComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    AppMaterialModule
  ],
  providers: [
    SubjectNotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
