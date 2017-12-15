import {Component, OnInit} from '@angular/core';

import {
  FormBuilder, FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-demo-form-sku-with-builders',
  templateUrl: './demo-form-sku-with-builders.component.html',
  styleUrls: ['./demo-form-sku-with-builders.component.css']
})
export class DemoFormSkuWithBuildersComponent implements OnInit {

  myForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({

      'sku1': ['', Validators.compose([Validators.required, this.skuValidator])],
      'sku2': ['sku2']
    });

    /*this.skuValidate = this.myForm.controls['sku1'];
    */

    this.myForm.controls['sku1'].valueChanges.subscribe(
      (value: string) => {
        console.log('sku1 value changed to :', value);
      }
    );

    this.myForm.valueChanges.subscribe(
      (value: string) => {
        console.log('form value changed to :', value);
      }
    );

  }
/*
  onSubmit(f: any): void {
    console.log('value -> ', f);
  }
*/
  onSubmit(value: string): void {
    console.log('value -> ', value);
  }

  ngOnInit() {
  }

  skuValidator(control: FormControl): {[s: string]: boolean} {
    if (!control.value.match(/^123/)) {

      return {invalidSku: true};
    }
  }

}
