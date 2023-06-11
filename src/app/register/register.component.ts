import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { FormError } from '../shared/types/formError';
import { RegisterService } from './register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public form: FormGroup
  public errors: FormError[]

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private registerService: RegisterService
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: [{
        value: '',
        disabled: false,
      }, [
        Validators.required,
      ]],
      password: [{
        value: '',
        disabled: false,
      }, [
        Validators.required,
        this.checkPasswordLength('password', 'incorrect_length')
      ]],
      password_confirm: [{
        value: '',
        disabled: false,
      }, [
        Validators.required,
        this.mismatchedFields('password', 'mismatched_password')
      ]],
      email: [{
        value: '',
        disabled: false,
      }, [
        Validators.email,
        Validators.required,
      ]],
      email_confirm: [{
        value: '',
        disabled: false,
      }, [
        Validators.email,
        Validators.required,
        this.mismatchedFields('email', 'mismatched_email')
      ]],
    })
  }

  onScroll(event: Event) {
    const leftPanel = event.target as HTMLElement;
    const scrollTop = leftPanel.scrollTop;
    const rightPanel = leftPanel.nextElementSibling as HTMLElement;
    rightPanel.style.transform = `translateY(${-scrollTop}px)`;
  }

  async submit() {
    if (this.form.valid) {
      const username = this.form.get('username')?.value
      const password = this.form.get('password')?.value
      const password_confirm = this.form.get('password_confirm')?.value
      const email = this.form.get('email')?.value
      const email_confirm = this.form.get('email_confirm')?.value
      if (email != email_confirm) {
        return
      }
      await this.registerService.cadasterUser(username, password, email);
      this.router.navigate([''])
      return
    }
    this.errors = this.getFormValidationErrors(this.form)
    console.log(this.errors)
  }

  getFormValidationErrors(form: FormGroup): FormError[] {
    const result: FormError[] = [];
    Object.keys(form.controls).forEach(key => {
      const controlErrors: ValidationErrors | null | undefined = form.get(key)?.errors;
      if (controlErrors) {
        Object.keys(controlErrors).forEach(keyError => {
          result.push({
            control: key,
            error: keyError,
            value: controlErrors[keyError],
            humanMessage: this.getHumanMessage(keyError, key)
          });
        });
      }
    });

    return result;
  }

  getHumanMessage(error: string, key: string): string {
    const input = this.getFormattedControlName(key)
    const errorMessages: { [key: string]: string } = {
      email: 'E-mail inválido por favor digite um e-mail válido, exemplo: example@example.com.',
      required: `O campo ${input} é obrigatório.`,
      mismatched_email: 'Os emails não são iguais.',
      mismatched_password: 'As senhas não são iguais.',
      incorrect_length: 'A senha deve conter pelo menos 8 caracteres'
    }

    return errorMessages[error]
  }

  getFormattedControlName(control: string): string {
    const errorMessages: { [key: string]: string } = {
      username: 'usuário',
      password: 'senha',
      password_confirm: 'confirmar senha',
      email: 'e-mail',
      email_confirm: 'confirmar e-mail'
    }

    return errorMessages[control]
  }

  mismatchedFields(passwordInput: string, errorKey: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: unknown } => {
      const parent = control.parent;
      if (!parent) {
        return {}
      }

      const otherControl = parent.get(passwordInput)
      const otherControlValue = otherControl?.value as string
      const actualControlValue = control.value as string
      if (otherControlValue !== actualControlValue) {
        return {
          [errorKey]: true,
        }
      }

      return {}
    }
  }

  checkPasswordLength(passwordInput: string, errorKey: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: unknown } => {
      const parent = control.parent;
      if (!parent) {
        return {}
      }

      const otherControl = parent.get(passwordInput)
      const otherControlValue = otherControl?.value as string
      const actualControlValue = control.value as string
      if (actualControlValue.length < 8 || actualControlValue.length > 50) {
        return {
          [errorKey]: true,
        }
      }

      return {}
    }
  }


}
