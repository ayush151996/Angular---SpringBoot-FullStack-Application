import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecordLevelsComponent } from './record-levels/record-levels.component';
import { HttpClientModule } from '@angular/common/http';
import { RecordlevelsFormsComponent } from './recordlevels-forms/recordlevels-forms.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RecordLevelsComponent,
       RecordlevelsFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
