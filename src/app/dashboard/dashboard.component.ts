import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { SampleService } from '../services/sample-service';
import { Http, Response, Headers } from '@angular/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  sampleDataListing	: any = {};
  userData	: any = {};

userData2	: any = {};
  public data:any=[];
  constructor(private router:Router,private user: UserService,private http: Http) { }
n=0;
m=0;
  ngOnInit() {
    this.user.getUserData1().subscribe(data => this.userData = data);

    this.user.getUserData2().subscribe(data => this.userData2 = data);
}
  ctasks()
  {
    this.router.navigate(['ctask'])
  }
  count()
  {
    while(this.userData.data[this.n] != undefined)
    {
    if(this.userData.data[this.n].tast_status==1)
    {
     this.m++;
    }
    this.n++;
    
  }
  }

complete = function(i){
 this.taskObj ={
"task_id": this.userData.data[i].task_id

 }
 
 
 this.http.put("http://localhost:8080/complete", this.taskObj).subscribe((res:Response) => {
      
  })
  this.user.getUserData1().subscribe(data => this.userData = data);
}
}
