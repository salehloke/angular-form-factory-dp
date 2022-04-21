import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { IPAddressForm } from './providers/ip-address-form';
import { IPAddressFormDataProvider } from './providers/ip-address-form-data-provider';
import { IPAddressFormFactory } from './providers/ip-address-form-factory';

@Component({
  selector: 'ip-address-form',
  templateUrl: './ip-address-form.component.html',
  styleUrls: ['./ip-address-form.component.css'],
  providers: [
    FormBuilder,
    IPAddressFormFactory,
    {
      provide: IPAddressForm,
      useFactory: (factory: IPAddressFormFactory) => factory.create(),
      deps: [IPAddressFormFactory],
    },
    IPAddressFormDataProvider,
    IPAddressFormFactory,
  ],
})
export class IpAddressFormComponent implements OnInit {
  formIsValid: Observable<boolean>;

  constructor(
    public mainForm: IPAddressForm,
    public formDataProvider: IPAddressFormDataProvider,
    public formActions: IPAddressFormDataProvider
  ) {
    console.log(this.mainForm);
  }

  ngOnInit() {}
}
