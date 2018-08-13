import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from '../../../node_modules/ngx-webstorage';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  first_name:string;
  last_name:string;
  emp_id=0;
  i=0;
  userData: any={};
  constructor(private sessionst:SessionStorageService,private userDataList:UserService) { }

  ngOnInit() {
this.userDataList.getUserData().subscribe(data => this.userData=data);
this.emp_id= this.sessionst.retrieve("username");
  }

}
