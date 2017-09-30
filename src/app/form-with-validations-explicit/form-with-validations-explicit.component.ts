import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-form-with-validations-explicit',
  templateUrl: './form-with-validations-explicit.component.html',
  styleUrls: ['./form-with-validations-explicit.component.css']
})
export class FormWithValidationsExplicitComponent{
  myForm: FormGroup;
  sku: AbstractControl;
  
    constructor(fb: FormBuilder) {
      this.myForm = fb.group({
        'sku': ['', Validators.required]
      });
      this.sku = this.myForm.controls['sku'];
    }

    onSubmit(value: string): void {
      console.log('You submitted value: ', value);
    }  
}
