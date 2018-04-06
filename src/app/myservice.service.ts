import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";


@Injectable()
export class MyserviceService {

  constructor(private http:HttpClient) {
    /*let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    this.http.post("http://localhost/sahilphp/angulartry.php",{name:"sahil"},{headers: headers}).subscribe((resp)=>{
      console.log(resp);
    });*/
  }
  adddata(data) {
    //console.log(data);
    /*let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');*/
    return this.http.post("http://localhost/angularapi/insert_stud.php",data).subscribe((res)=>{
      alert(res['result']);
    });
  }
  viewdata(){
    return this.http.get("http://localhost/angularapi/view_stud.php")
  }
}
