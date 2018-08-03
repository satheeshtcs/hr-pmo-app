import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { SampleService } from '../services/sample-service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  sampleDataListing	: any = {};

  constructor(private user: UserService) { }

  ngOnInit() {
    
  }

}
