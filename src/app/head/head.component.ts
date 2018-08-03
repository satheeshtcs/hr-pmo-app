import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { UserService } from '../user.service';
import { SampleService } from '../services/sample-service';
import { Http, Response, Headers } from '@angular/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
  sampleDataListing	: any = {};
  userData	: any = {};
  public data:any=[];

  constructor(private router:Router,private user: UserService,private http: Http,private datas: DataService) { }
  m=0;
  n=0;
  ngOnInit() {this.user.getUserData1().subscribe(data => this.userData = data);
  }

  ctasks()
  {
    this.router.navigate(['ctask'])
  }
  assign(e)
  {
    let task1_id=this.userData.data[e].task_id;
    this.datas.setassignObj(task1_id)
    console.log(task1_id)
    this.router.navigate(['assign'])
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
}
