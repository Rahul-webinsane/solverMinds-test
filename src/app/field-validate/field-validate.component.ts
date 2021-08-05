import { ValidationService } from './../service/validation.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-field-validate',
  templateUrl: './field-validate.component.html',
  styleUrls: ['./field-validate.component.css']
})
export class FieldValidateComponent implements OnInit {

  @Input() control:FormControl;

  constructor(public validationService:ValidationService) { }

  ngOnInit(): void {
  }

  get errorMsg(){
    for(let propertyName in this.control.errors){
      if(this.control.errors.hasOwnProperty(propertyName)){
        return this.validationService.getValidatorErrorMsg(propertyName,this.control.errors[propertyName])
      }
    }
    return null;
  }

}
