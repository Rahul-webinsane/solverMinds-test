import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  getValidatorErrorMsg(validatorName:string,validatorValue?:any){

    let config = {
      'required':'Required *',
      'maxlength': `Maxlength ${validatorValue.requiredLength}`,
      'minlength': `MinLength ${validatorValue.requiredLength}`,
    };
    return config[validatorName];
  }
}
