import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-vtaskmem',
  templateUrl: './vtaskmem.component.html',
  styleUrls: ['./vtaskmem.component.css']
})
export class VtaskmemComponent implements OnInit {
  userDataListing	: any = {};
  constructor(private userDataList: UserService) { }

  ngOnInit() {
    this.userDataList.getTaskMembers().subscribe(data => this.userDataListing = data);
  }
 /* settings = {
    actions:false,
      columns: {
        role_id: {
          title: 'Role ID'
          
        },
        role_code: {
          title: 'Role Code'
        },
        role_name: {
          title: '  Role Name'
        },
        role_description: {
          title: 'Role Description'
        }
       
      }
    };*/
}
 
