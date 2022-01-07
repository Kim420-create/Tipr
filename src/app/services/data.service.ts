import {  Injectable  } from '@angular/core';
import {  map  } from 'rxjs/operators'
import {  HttpClient  } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { FormArtistComponent } from '../components/form/form-artist/form-artist.component';
import { artistFormModel } from 'models/form.artist.model';

const INIT_DATA : any = [];
const BASE_URL = "http://localhost:3000";

@Injectable({
    providedIn: 'root'
})

export class DataService {

    private DataStore = new BehaviorSubject(INIT_DATA);
    data$: Observable<any>= this.DataStore.asObservable();
    private idArtist : String = "";
    
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

    getIdArtist(){
        return this.idArtist;
    }

    setIdArtist(id : string) {
        this.idArtist = id;
    }

 
}
