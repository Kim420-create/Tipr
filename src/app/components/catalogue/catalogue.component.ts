import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { DataService } from '../../services/data.service';
import { artistFormModel } from '../../../../models/form.artist.model';


@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})

export class CatalogueComponent implements OnInit {

  formValue !: FormGroup;
  artistData !: any;
  artistModelObj : artistFormModel = new artistFormModel();

  api$ = this.data.data$;
  artistId !: any;

  constructor(private data : DataService, private formbuilder : FormBuilder, private router : Router) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      id : [''],
      pseudo : [''],
      nom : [''],
      prenom : [''],
      email : [''],
      reseaux : [''],
      password : ['']
    })
    this.getArtist();
  }
 
  getArtist(){
    this.data.getArtist()
    .subscribe(res => {
      this.artistData = res;
      console.log("ArtistData :",this.artistData)
    })
  }

  deleteArtist(data : any) {
    this.data.deleteArtist(data.id)
    .subscribe(res => {
      alert("L'Artiste vient d'être supprimé.")
      this.getArtist();
    })
  }
  
  onEdit(data : any) {
    this.artistModelObj.id = data.id;
    this.formValue.controls['pseudo'].setValue(data.pseudo);
    this.formValue.controls['nom'].setValue(data.nom);
    this.formValue.controls['prenom'].setValue(data.prenom);
    this.formValue.controls['email'].setValue(data.email);
    this.formValue.controls['reseaux'].setValue(data.reseaux);
    this.formValue.controls['password'].setValue(data.password);
    console.log("data :", data.id);
    
  }
  
  updateArtistDetails(){
    this.artistModelObj = this.formValue.value;    
    // console.log("ArtistModelObj", this.artistModelObj);
    this.data.updateArtist(this.artistModelObj, this.artistModelObj.id)
    .subscribe(res => {
      alert("L'artiste a été modifié avec succes");
      this.formValue.reset();
      this.getArtist();
    })
  }
}
