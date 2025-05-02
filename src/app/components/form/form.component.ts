import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { matchValidator } from '../../validators/validators';

@Component({
  selector: 'app-form',
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  showPassword: boolean = false;
  showPasswordConfirm: boolean = false;
  form!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group(
      {
        name: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        passwordConfirm: ['', [Validators.required]],
        age: [20, [Validators.min(1)]],
      },
      { validators: matchValidator('passwordConfirm', 'password') }
    );
  }

  incrementAge() {
    const age = Number(this.form.get('age')?.value);
    this.form.get('age')?.setValue(age + 1);
  }

  decrementAge() {
    const age = Number(this.form.get('age')?.value);
    this.form.get('age')?.setValue(age <= 1 ? 1 : age - 1);
  }

  getErrorMessage(ctrlName: string) {
    if (!ctrlName) return null;

    const ctrl = this.form.get(ctrlName);
    switch (ctrlName) {
      case 'name':
        return 'Please input a valid name';
      case 'email':
        return 'Please input a valid email';
      case 'password':
      case 'passwordConfirm':
        if (ctrl?.hasError('minlength')) return 'Password should be at least 8 characters long';
        else if (ctrl?.hasError('mismatch')) return 'Password confirmation should match';
        return 'Please input a valid password';
      default:
        return null;
    }
  }

  onSubmit() {
    console.log('form value', this.form.value);
    alert(`Thanks for submitting, ${this.form.get('name')?.value}!`);
  }
}
