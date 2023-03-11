import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Form variables
registerForm:any = FormGroup;
submitted = false;
constructor( private formBuilder: FormBuilder){}
//Add user form actions
get f() { return this.registerForm.controls; }
onSubmit() {
  
  this.submitted = true;
  // stop here if form is invalid
  if (this.registerForm.invalid) {
      return;
  }
  //True if all the fields are filled
  if(this.submitted)
  {
    alert("Great!!");
  }
 
}
  ngOnInit() {
    //Add form validations
     this.registerForm = this.formBuilder.group({
       fname: ['', [Validators.required]],
      lname: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      date: ['', [Validators.required]],
      message: ['', [Validators.required]],
      
      });
  }
}