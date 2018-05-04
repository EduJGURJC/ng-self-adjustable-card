import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatCardModule, MatIconModule, MatDividerModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { SelfAdjustableCardComponent } from './self-adjustable-card/self-adjustable-card.component';

@NgModule({
  declarations: [AppComponent, SelfAdjustableCardComponent],
  imports: [BrowserModule, MatCardModule, MatIconModule, MatDividerModule, FlexLayoutModule],
  exports: [SelfAdjustableCardComponent],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SelfAdjustableCardModule {}
