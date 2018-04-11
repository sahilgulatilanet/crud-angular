import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";


@Injectable()
export class MyserviceService {
  data;
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
      this.viewdata();
    });
  }
  viewdata(){
    return this.http.get("http://localhost/angularapi/view_stud.php").subscribe((res)=>{
      console.log(res);
      this.data=res;
    });
  }
  deleteData(data){
    return this.http.post("http://localhost/angularapi/delete_stud.php",data).subscribe((res)=>{
      console.log(res);
      alert(res['result']);
      this.viewdata();
    });
  }
  updateDataclk(data){
    return this.http.post("http://localhost/angularapi/update_data_stud.php",data);
  }
  updateData(data){
    return this.http.post("http://localhost/angularapi/update_stud.php",data);
  }
}
