import { FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { distinctUntilChanged, map, startWith } from 'rxjs/operators';

export class IPAddressForm {
  readonly initialValue;

  constructor(private formGroup: FormGroup) {
    this.initialValue = formGroup.value;
  }

  get asFormGroup() {
    return this.formGroup;
  }

  ageIsGreaterThan(min: number): Observable<boolean> {
    return this.formGroup.valueChanges.pipe(
      map((value) => value.age),
      distinctUntilChanged(),
      map((it) => it > min),
      startWith(false)
    );
  }

  isValid(): Observable<boolean> {
    return this.formGroup.statusChanges.pipe(
      map(() => this.formGroup.valid),
      startWith(false)
    );
  }

  reset() {
    this.formGroup.reset();
  }
}
