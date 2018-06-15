import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Http, Response} from '@angular/http';
import { SampleService } from './services/sample-service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private appUrl = 'http://localhost:8080/demoList';
  sampleDataListing	: any = {};

	constructor(private SampleServiceList: SampleService) { }
	 ngOnInit() {
		this.SampleServiceList.getListData().subscribe(data => this.sampleDataListing = data);
	}
  /*constructor(private http:Http) {
    console.log("called");
    this.getList();
    this.getData();
  }

  getData () {
    return this.http.get(this.appUrl)
      .map((res:Response) => res.json());
  }

  getList() {
    this.getData().subscribe(data => {
      console.log(data);
      this.data = data;
    })
  }*/
}
