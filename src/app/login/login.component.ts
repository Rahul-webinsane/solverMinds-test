import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logForm: FormGroup;
  

  constructor(private authService: AuthService, private router: Router,private fb: FormBuilder) { 
    this.logForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
    // this.logForm = fb.group({
    //   username: ["", Validators.required],
    //   password: ["", Validators.required]
    // });
  }

  ngOnInit(): void {
  }

  onSubmit() {

    console.log("log form ",this.logForm.value);
    // return
    
    if (this.logForm.invalid) {
      return;
    }

    this.authService
      .login(this.logForm.get('username')?.value, this.logForm.get('password')?.value)
      .subscribe((response) => {
        this.router.navigate(['/dashboard']);
      });
  }

}
