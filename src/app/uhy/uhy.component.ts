import { Component, OnInit } from '@angular/core';
import { DropdownModule, WavesModule } from 'angular-bootstrap-md';
import { Trial1Service } from '../trial1.service';
import { concat } from 'rxjs';
import { UserService } from '../user.service';


@Component({
  selector: 'app-uhy',
  templateUrl: './uhy.component.html',
  styleUrls: ['./uhy.component.css']
})
export class UhyComponent implements OnInit { 







  
target1:any={};
  
 
  submitted = false;
 
  onSubmit() { this.submitted = true; }
 
 
userdata : any = {};
userData1 : any = {};
data3 : any ={};

constructor(private trial1:Trial1Service,private userListing:UserService) { }



  ngOnInit() {
    this.trial1.getJSON().subscribe(data => this.userdata = data);
    
    this.userListing.getUserData().subscribe(data =>this.userData1 = data );
    
    
  }


 getNodeById(id, node){
  var reduce = [].reduce;
  function runner(result, node){
      if(result || !node) return result;
      return node.id == id && node || // validate the data
          runner(null, node.children) || //process this nodes children
          reduce.call(Object(node), runner, result);  //maybe this is some ArrayLike Structure
          //console.log(this.node.children);
  }
  return runner(null, node);
}
/*
searchFilter(search: string, userdata: any[]) {
  for(let directory of userdata){
      if(directory.user1.user_id.startsWith(search)){
          return directory;
      }
      if (directory.childnodes !== undefined && directory.childnodes.length > 0) {
          let childsearch = this.searchFilter(search, directory.childnodes)
          if (childsearch !== undefined) {
              return childsearch
          }
      }
  }
  return undefined;
}*/
n=0;
m=0;
k=0;
onSubmita(e){
  console.log(this.userdata);
  console.log(e.target.elements[0].value);
  this.target1 = this.getNodeById(e.target.elements[0].value, this.userdata);
    console.log(this.target1);
    var stringedData=JSON.stringify((this.target1));
    console.log(stringedData);
   var f = stringedData.match(/\d+/g); 
   console.log(f);
 
  while(f[this.m]!=null) // check here 
  {
    this.k=Number(f[this.m]);
    this.m++;
this.data3=this.userData1.data[this.k].first_name;
console.log(this.data3);

  }

  
    //console.log(Number(stringedData));
    //var uid:number[] = new Array(4);


//var k = stringedData.replace( /^\D+/g, '');
//console.log(k);
  // while(stringedData[this.n]!=null)
   //if(Number(stringedData[this.n])!=NaN)
  // {
 //    if( (Number(stringedData[(this.n)+1])) !=NaN)
   //  {
    // console.log(Number(stringedData[this.n]),Number(stringedData[(this.n)+1]));
  //  var a= stringedData[this.n]; var b= stringedData[(this.n)+1];
  //  var c=concat(a,b);
  //  console.log(a);
   //  this.n++;
   //   this.n++;
   //  }
     //uid[this.m]=Number(stringedData[this.n]);
   //  this.m++;
     
   //}
   // console.log(uid);
   // this.n=this.target1.length();
   /* if(this.target1.length()!=0)
    {
      this.n--;
      console.log(this.target1.children[this.n]);
    }*/
    //console.log(this.target1.children[0].children[0]);
}
}
