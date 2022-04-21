import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { IPAddressForm } from './ip-address-form';

@Injectable()
export class IPAddressFormAction {
  searchButtonClicked = new Subject<void>();

  constructor(
    private form: IPAddressForm,
    private urlStore: UrlStore<PersonSearchCriteria>
  ) {
    this.handleSearchButtonClick();
  }

  private handleSearchButtonClick() {
    const searchAction = this.searchButtonClicked.pipe(
      map(() => this.form.asFormGroup.value)
    );
    this.urlStore.setSource(searchAction);
  }
}
