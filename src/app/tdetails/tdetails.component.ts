import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from '../../../node_modules/ngx-webstorage';
import { tdetails } from '../models/tdetail.module';
import { Http } from '../../../node_modules/@angular/http';
import { UserService } from '../user.service';



@Component({
  selector: 'app-tdetails',
  templateUrl: './tdetails.component.html',
  styleUrls: ['./tdetails.component.css']
})
export class TdetailsComponent implements OnInit {
task_name:string;
taskmembers: any ={};
emp_id:number;
tdetail : tdetails ={
  month: "January",
  val:[null]
}

  constructor(private sessiont:SessionStorageService,private http:Http,private taskMembers: UserService) { }

  ngOnInit() {
    
    this.taskMembers.getTaskMembers().subscribe(data=> this.taskmembers =data );
    this.emp_id=this.sessiont.retrieve("username");

    
  }
  
  sub = function(i){
    console.log(this.tdetail.month)
    console.log(this.tdetail.val[i])
    this.taskObj = {
      "emp_id" : this.sessiont.retrieve("username"),
      "task_id" :this.taskmembers.data[i].task_id ,
      "month" : this.tdetail.month,
      "Value" : this.tdetail.val[i]
      
      
    }
    this.http.put("http://localhost:8080/tcapture", this.taskObj).subscribe((res:Response) => {})
  }

}
