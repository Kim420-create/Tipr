import { Injectable } from '@angular/core';
import {  map  } from 'rxjs/operators'
import {  HttpClient  } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TiprService {

  idTipr : String = "";
  idTest : Subject<string> = new Subject();

  constructor(private http : HttpClient) { }

postTipr(data:any){
  return this.http.post<any>(`http://localhost:5000/tipr/add`, data)
  .pipe(map((res : any) => {
      return res;
  }))
}

getTipr(){
  return this.http.get<any>(`http://localhost:5000/tipr/`)
  .pipe(map((res : any) => {
    return res;
  }))
}

updateTipr(data : any , id : number) {
  return this.http.put<any>(`http://localhost:5000/tipr/update/` + id, data)
  .pipe(map((res : any) => {
    return res;
  }))
}

deleteTipr(id : number) {
  return this.http.delete<any>(`http://localhost:5000/tipr/delete/` + id)
  .pipe(map((res : any) => {
    return res;
  }))
}

getTiprId(){ 
    return this.http.get<any>(`http://localhost:5000/tipr/${this.idTipr}`)
    .pipe(map((res : any) =>{
        return res;        
    }))
}

getIdTest(id : string){
  this.idTest.next(id); 
}

getIdTipr(){
  return this.idTipr;
}
setIdTipr(id : string){
  this.idTipr = id;
}
}
