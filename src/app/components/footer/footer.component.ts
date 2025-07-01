import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-footer',
  imports: [
    TranslateModule,
    CommonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  public emailForm: FormGroup = new FormGroup({
    email: new FormControl<string | null>(null, {
      validators: [Validators.required, Validators.email],
    }),
  });

  constructor() {}

  public showError(formName: string, form: FormGroup): boolean {
    return this.showErrorForInputs(formName, form);
  }

  public showErrorForInputs(formName: string, form: FormGroup): boolean {
    const control: AbstractControl<any, any> | null = form.get(formName);
    if (control) {
      // A control is dirty if the user has changed the value in the UI.
      // So, if the user has somehow interacted with the input and the input is invalid, an error must be returned.
      return (control.dirty || control.touched) && control.invalid;
    }
    return false;
  }

  public onSubmit(): void {
    if (this.emailForm.valid) {
      console.log('sending the email:', this.emailForm.value.email);
    }
  }
}
