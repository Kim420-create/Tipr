import {  Injectable  } from '@angular/core';
import {  map  } from 'rxjs/operators'
import {  HttpClient  } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { FormArtistComponent } from '../components/form/form-artist/form-artist.component';

const INIT_DATA : any = [];
const BASE_URL = "http://localhost:3000";

@Injectable({
    providedIn: 'root'
})

export class DataService {

    private DataStore = new BehaviorSubject(INIT_DATA);
    data$: Observable<any>= this.DataStore.asObservable();
    idTest : Subject<string> = new Subject();

    constructor(private http : HttpClient){}

    postArtist(data:any){
        return this.http.post<any>(`http://localhost:3000/artist/`, data)
        .pipe(map((res : any) => {
            return res;
        }))    
    }

    getArtist(){
        return this.http.get<any>(`http://localhost:3000/artist/`)
        .pipe(map((res : any) =>{
            return res;
        }))
    }

    updateArtist(data:any, id: number) {
        return this.http.put<any>(`http://localhost:3000/artist/` + id , data)
        .pipe(map((res:any) => {
            return res;
        }))
    }

    deleteArtist(id : number) {
        return this.http.delete<any>(`http://localhost:3000/artist/` + id)
        .pipe(map((res : any) => {
            return res;
        }))
    }




    // getArtistId(id:any){
    //     return this.http.get<any>(`http://localhost:3000/artist/`, id)
    //     .pipe(map((res : any) =>{
    //         return res;
    //     }))
    // }

//  Test - - - - - - - - - - - - - - - - - - -
    getTodos(){
        return this.http.get<any>(`${BASE_URL}/artist`)
        .pipe(map((res : any) =>{
            return res;
        }))
        .subscribe(data => {
            this.DataStore.next(data);
        })
    }


    getIdTest(id : string){
        this.idTest.next(id); 
    }

//  - - - - - - - - - - - - - - - - - - -

    postTipr(data:any){
        return this.http.post<any>(`http://localhost:3000/tipr/`, data)
        .pipe(map((res : any) => {
            return res;
        }))
    }


}
