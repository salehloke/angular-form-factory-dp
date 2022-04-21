import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { IPAddressForm } from './ip-address-form';

@Injectable()
export class IPAddressFormFactory {
  constructor(private formBuilder: FormBuilder) {}

  create(): IPAddressForm {
    const formGroup = this.createFormGroup();
    console.log('create', formGroup);
    return new IPAddressForm(formGroup);
  }

  private createFormGroup() {
    return this.formBuilder.group({
      ipAddressStart: [''],
      ipAddressEnd: [''],
      isRange: [''],
    });
  }
}
