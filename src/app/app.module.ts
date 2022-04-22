import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { IpAddressFormComponent } from './ip-address-form/ip-address-form.component';
import { RangeInputComponent } from './range-input/range-input.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [AppComponent, IpAddressFormComponent, RangeInputComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
