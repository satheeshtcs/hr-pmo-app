import { Component, OnInit } from '@angular/core';
import { DropdownModule, WavesModule } from 'angular-bootstrap-md';
import { Trial1Service } from '../trial1.service';
@Component({
  selector: 'app-uhy',
  templateUrl: './uhy.component.html',
  styleUrls: ['./uhy.component.css']
})
export class UhyComponent implements OnInit { 
 


constructor(private trial1:Trial1Service) { }



  ngOnInit() {
    this.trial1.getJSON().subscribe(data => {console.log(data)});
  }

if   
}
