import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private i: number;
  private x: string;
  constructor() {
    this.i = 0;

   }

   public setIndexObj(val: number) {
    this.i = val;
}

public getIndexObj(): number {
    return this.i;
}

public setRoleObj(val: string){
this.x = val;
}

public getRoleObj(){
  return this.x;
}
}
