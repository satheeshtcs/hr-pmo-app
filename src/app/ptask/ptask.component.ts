import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { UserService } from '../user.service';
@Component({
  selector: 'app-ptask',
  templateUrl: './ptask.component.html',
  styleUrls: ['./ptask.component.css']
})
export class PtaskComponent implements OnInit {
  sampleDataListing	: any = {};
  userData	: any = {};
  constructor(private user: UserService,private http: Http) { }
  

  ngOnInit() { this.user.getUserData1().subscribe(data => this.userData = data);
  
  }

}
