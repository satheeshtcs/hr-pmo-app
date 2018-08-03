import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';

import { Form } from '../form'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-changep',
  templateUrl: './changep.component.html',
  styleUrls: ['./changep.component.css']
})

export class ChangepComponent implements OnInit {
  rForm: FormGroup;                   
  password:string = '';
  userData	: any = {};
  constructor(private userDataList: UserService, private router:Router,private fb: FormBuilder) {this.rForm = fb.group({
    'password':  [null, Validators.required],
    'validate' : ''
  }); }

  ngOnInit() {
    this.userDataList.getUserData().subscribe(data => this.userData = data);

}
checkP(e){
  e.preventDefault();
     console.log(e);
     var password = e.target.elements[0].value;
     
     if(this.userData.data[0].password == password){
        this.router.navigate(['updatep'])
     }
     if(password=="")
   {
     window.alert('Please enter old password')
   }
}


}
