import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';

import { artistFormModel } from '../../../../../models/form.artist.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-profil-artist',
  templateUrl: './profil-artist.component.html',
  styleUrls: ['./profil-artist.component.css']
})

export class ProfilArtistComponent implements OnInit {

  artistId !: any;

  constructor(private dataService : DataService, private router : Router, private formbuilder : FormBuilder) { }

  formValue !: FormGroup;
  api$= this.dataService.data$;
  artistFormModel : artistFormModel = new artistFormModel();
  artistData !: any;
  idArtistToEdit !: string;

  
  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      'stageName' : null,
      'lastName' : null,
      'name' : null,
      'email': null,
      'socialMedia': null,
      'password': null,
      'description' : null,
    });

    this.dataService.getArtistId().subscribe(data => {
      if(data) {

        this.artistData = data[0];
        console.log("Test data 1 :",this.artistData._id);               
        this.setValueData(this.artistData);
      }      
    })
  }

setValueData(data:any){
  //Set value to the formGroup
  console.log("data :", data);
  this.formValue.setValue({
  'stageName' : data['stageName'] ? data['stageName'] : '',
  'name' : data['name'] ? data['name'] : '',
  'lastName' : data['lastName'] ? data['lastName'] : '',
  'email' : data['email'] ? data['email'] : '',
  'socialMedia' : data['socialMedia'] ? data['socialMedia'] : '',
  'password' : data['password'] ? data['password'] : '',
  'description' : data['description'] ? data['description'] : ''
})
}

// Update
updateArtist(){
  this.artistData.stageName = this.formValue.value.stageName;
  this.artistData.name = this.formValue.value.name;
  this.artistData.lastName = this.formValue.value.lastName;
  this.artistData.email = this.formValue.value.email;
  this.artistData.socialMedia = this.formValue.value.socialMedia;
  this.artistData.password = this.formValue.value.password;
  this.artistData.description = this.formValue.value.description;

  this.dataService.updateArtist(this.artistData, this.artistData._id)
  .subscribe(res => {
    alert("La mise à jour à bien été effectué !")
  }, err => {
    alert("Un problème est survenu lors de la modification")
  })
}

// Delete
deleteArtist(){
  console.log("TEST :",this.artistData._id);
  
  this.dataService.deleteArtist(this.artistData._id)
  .subscribe(res => {
    alert("Vous avez supprimé votre page !")
  })
}

getIdProfil(id:string){
  this.dataService.setIdArtist(id);
}
}
