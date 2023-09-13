import { XmlUploadComponent } from './components/xml-upload/xml-upload.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';

const modulesAngularMaterial = [
  MatCardModule,
  MatListModule,
  MatToolbarModule,
];

@NgModule({
  declarations: [
    AppComponent,
    XmlUploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    modulesAngularMaterial
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
