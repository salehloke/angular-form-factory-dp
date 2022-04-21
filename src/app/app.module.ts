import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { IpAddressFormComponent } from './ip-address-form/ip-address-form.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, IpAddressFormComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
