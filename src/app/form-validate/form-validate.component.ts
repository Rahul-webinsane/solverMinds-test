import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ValidationService } from '../service/validation.service';

@Component({
  selector: 'app-form-validate',
  templateUrl: './form-validate.component.html',
  styleUrls: ['./form-validate.component.css']
})
export class FormValidateComponent implements OnInit {

  @Input() control:FormControl;

  constructor(public validationService: ValidationService) { }

  ngOnInit(): void {
  }

  get errorMsg(){
    for(let propertyName in this.control.errors){
      if(this.control.errors.hasOwnProperty(propertyName) && this.control.touched){
        return this.validationService.getValidatorErrorMsg(propertyName,this.control.errors[propertyName])
      }
    }
    return null;
  }

}
