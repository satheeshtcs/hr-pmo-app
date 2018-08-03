import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private i: number;
  constructor() {
    this.i = 0;

   }

   public setIndexObj(val: number) {
    this.i = val;
}

public getIndexObj(): number {
    return this.i;
}

public settaskObj(val: number) {
  this.i = val;
}

public gettaskObj(): number {
  return this.i;
}
public setassignObj(val: number) {
  this.i = val;
}

public getassignObj(): number {
  return this.i;
}


}
