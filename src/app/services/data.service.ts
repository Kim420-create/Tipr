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
    idArtist : String = "";
    idTipr : String = "";

    constructor(private http : HttpClient){}

    postArtist(data:any){
        return this.http.post<any>(`http://localhost:5000/artist/add`, data)
        .pipe(map((res : any) => {
            return res;
        }))    
    }

    getArtist(){
        return this.http.get<any>(`http://localhost:5000/artist/`)
        .pipe(map((res : any) =>{
            return res;
        }))
    }

    updateArtist(data:any, id: number) {
        return this.http.put<any>(`http://localhost:5000/artist/update/` + id , data)
        .pipe(map((res:any) => {
            return res;
        }))
    }

    deleteArtist(id : number) {
        return this.http.delete<any>(`http://localhost:5000/artist/delete/` + id)
        .pipe(map((res : any) => {
            return res;
        }))
    }

    getArtistId(){  
        return this.http.get<any>(`http://localhost:5000/artist/${this.idArtist}`)
        .pipe(map((res : any) =>{
            return res;
        }))
    }

    getIdTest(id : string){
        this.idTest.next(id); 
    }

}
