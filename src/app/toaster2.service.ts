import { Injectable } from '@angular/core';
declare var toastr:any;
@Injectable({
  providedIn: 'root'
})
export class Toaster2Service {

  constructor() {
    this.setting();
   }
  Success(title : string,message?:string){
    toastr.success(title,message);
  }
  Warning(title : string,message?:string){
    toastr.warning(title,message);
  }
  Error(title : string,message?:string){
    toastr.error(title,message);
  }
  Info(title : string,message?:string){
    toastr.info(title,message);
  }
setting(){
  toastr.options = {
    "closeButton": false,
    "debug": false,
    "newestOnTop": false,
    "progressBar": false,
    "positionClass": "toast-bottom-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "100",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  }
}
}
