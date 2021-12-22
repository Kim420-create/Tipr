import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { artistFormModel } from '../../form/form.artist.model';
import { DataService } from 'src/app/services/data.service';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-profil-artist',
  templateUrl: './profil-artist.component.html',
  styleUrls: ['./profil-artist.component.css']
})

export class ProfilArtistComponent implements OnInit {

  constructor(private api : DataService, private router : Router, private formbuilder : FormBuilder) { }

  formValue !: FormGroup;
  api$ = this.api.data$;
  artistModelObj : artistFormModel = new artistFormModel();


  ngOnInit(): void {
    this.api.getTodos();
    console.log("Api$ :", this.api$);        
  }
 
  // onEdit(data : any) {
  //   this.artistModelObj.id = data.id;
  //   this.formValue.controls['pseudo'].setValue(data.pseudo);
  //   this.formValue.controls['nom'].setValue(data.nom);
  //   this.formValue.controls['prenom'].setValue(data.prenom);
  //   this.formValue.controls['email'].setValue(data.email);
  //   this.formValue.controls['reseaux'].setValue(data.reseaux);
  //   this.formValue.controls['password'].setValue(data.password);
  //   console.log("data :", data.id);
    
  // }
 
  

  
  
 
}
