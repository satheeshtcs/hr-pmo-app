import { Component, OnInit, Input } from '@angular/core';
import { SampleService } from '../services/sample-service';
import { Http, Response,Headers } from '@angular/http';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  roleData : any = {};
  
  
  constructor(private ServiceRole: SampleService,private http: Http) { }
 
  ngOnInit() {
    this.ServiceRole.getListData1234().subscribe(data => this.roleData = data);
  }
  editUser = function(i){
    this.productObj = {
      
      "emp_id": this.roleData.data[i].emp_id,
      "role" : "Associate"
      
    }
    this.http.put("http://localhost:8080/editrole", this.productObj).subscribe((res:Response) => {
      
    })
    
   

  }
  

}
