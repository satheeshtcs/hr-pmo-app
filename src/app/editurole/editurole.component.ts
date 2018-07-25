import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { SampleService } from '../services/sample-service';
import { Http } from '../../../node_modules/@angular/http';
import {Router} from '@angular/router';
import { Userrole } from '../models/userrole.module';

@Component({
  selector: 'app-editurole',
  templateUrl: './editurole.component.html',
  styleUrls: ['./editurole.component.css']
})
export class EdituroleComponent implements OnInit {
  user1: Userrole ={
    role_id: null,
    role_code: null,
    role_name: null,
    role_description: null
  };
    


  private n:number=0;
  sampleDataListing	: any = {};
  constructor(private SampleServiceList: SampleService, private dataService:DataService,private http: Http,private router:Router) { }

  ngOnInit() {
    this.n=this.dataService.getIndexObj();
    this.SampleServiceList.getListData123a().subscribe(data => this.sampleDataListing = data);
  }
  updateRole = function(user1){
    this.userObj = {
      "role_id" : this.sampleDataListing.data[this.n].role_id,
      "role_code" :user1.role_code ,
      "role_name" : user1.role_name ,
      "role_description" : user1.role_description
     

    }
    
    if(user1.role_id == ""){
      window.alert("Please Enter Role Id")
    }
    else if(user1.role_code == ""){
      window.alert("Please Enter Role Code")
    }
    else if(user1.role == ""){
      window.alert("Please Enter Role  Name")
    }
    else if(user1.role_description == ""){
      window.alert("Please Enter Role Description")
    }
    
    else {
      this.http.put("http://localhost:8080/updateuserr", this.userObj).subscribe((res:Response) => {
        this.router.navigate(['userupdate'])
    })
    }
  }

}
