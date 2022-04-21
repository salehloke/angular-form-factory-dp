import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { IPAddressForm } from './ip-address-form';

@Injectable()
export class IPAddressFormAction {
  searchButtonClicked = new Subject<void>();

  constructor(private form: IPAddressForm) {}
}
