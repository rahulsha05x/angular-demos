import { Component, OnInit,OnChanges } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../models/user';

@Component({
  selector: 'app-user-registeration',
  templateUrl: './user-registeration.component.html',
  styleUrls: ['./user-registeration.component.css']
})
export class UserRegisterationComponent implements OnInit,OnChanges {

  userForm: FormGroup; 
  constructor(private fb:FormBuilder) { 
    this.createRegisteratioForm();
    this.logNameChange();
  }

  ngOnInit() {
  }
  ngOnChanges(){
    
  }

  nameChangeLog: string[] = [];
logNameChange() {
  const nameControl = this.userForm.get('firstName');
  nameControl.valueChanges.forEach(
    (value: string) => this.nameChangeLog.push(value)
  );
  console.log(this.nameChangeLog);
}
  createRegisteratioForm(){
    this.userForm = this.fb.group({
      firstName: '',
      lastName: '', 
      username: '',
      email: '',
      password: '',
      confirmPassword:''
    });
  }
  submitForm(user){
    const userDetail = this.showUserDetails();
    console.log(userDetail);
  }

  showUserDetails(): User {
    const userModel = this.userForm.value;
    
    return userModel;
  }

}
