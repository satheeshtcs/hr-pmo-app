import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { SampleService } from '../services/sample-service';
import { Http, Response, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-ctask',
  templateUrl: './ctask.component.html',
  styleUrls: ['./ctask.component.css']
})
export class CtaskComponent implements OnInit {
  userData	: any = {};
  private x:number;
  constructor(private router:Router,private user: UserService,private http: Http,private datas:DataService) { }
  

  ngOnInit() { 
    this.user.getUserData1().subscribe(data => this.userData = data);
    this.x=this.datas.gettaskObj();
  }

}
