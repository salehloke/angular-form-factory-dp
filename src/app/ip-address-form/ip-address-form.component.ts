import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IPAddressForm } from './providers/ip-address-form';
import { IPAddressFormDataProvider } from './providers/ip-address-form-data-provider';
import { IPAddressFormFactory } from './providers/ip-address-form-factory';

@Component({
  selector: 'ip-address-form',
  templateUrl: './ip-address-form.component.html',
  styleUrls: ['./ip-address-form.component.css'],
  providers: [
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
  @Input() mainForm: FormGroup;
  constructor() {}

  ngOnInit() {}
}
