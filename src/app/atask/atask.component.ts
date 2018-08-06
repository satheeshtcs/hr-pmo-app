import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Http } from '../../../node_modules/@angular/http';
import { SessionStorageService } from '../../../node_modules/ngx-webstorage';

@Component({
  selector: 'app-atask',
  templateUrl: './atask.component.html',
  styleUrls: ['./atask.component.css']
})
export class AtaskComponent implements OnInit {
userData:any={};
private y:string;
  constructor(private user:UserService,private http:Http,private sessiont:SessionStorageService) { }

  ngOnInit() {
    this.user.getUserRoleMap1().subscribe(data => this.userData = data);
    this.y="asso";
  }
  assignTask = function(i){
    this.taskObj ={
   "task_id":  this.sessiont.retrieve("atask"),
   "emp_id" : this.userData.data[i].emp_id
   
   }
    this.http.post("http://localhost:8080/assigntask", this.taskObj).subscribe((res:Response) => {
         
     })
     
   }
   
}
