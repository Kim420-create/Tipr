import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';

import { artistFormModel } from '../../../../../models/form.artist.model';
import { DataService } from 'src/app/services/data.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profil-artist',
  templateUrl: './profil-artist.component.html',
  styleUrls: ['./profil-artist.component.css']
})

export class ProfilArtistComponent implements OnInit {

  artistId !: any;
  currentUser : Object = {};

  constructor(private dataService : DataService, private router : Router, private formbuilder : FormBuilder, private activatedRoute : ActivatedRoute, private authService : AuthService) {}

  form !: FormGroup;
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

    let idArtist = this.dataService.getIdArtist();
    
    
    this.dataService.getArtistId().subscribe(data => {
      if(data) {
        this.artistData = data[0];
        this.setValueData(this.artistData);
      } 
    })
  }


 
setValueData(data:any){
  //Set value to the formGroup
  this.formValue.setValue({
  'stageName' : data['stageName'] ? data['stageName'] : '',
  'name' : data['name'] ? data['name'] : '',
  'lastName' : data['lastName'] ? data['lastName'] : '',
  'email' : data['email'] ? data['email'] : '',
  'socialMedia' : data['socialMedia'] ? data['socialMedia'] : '',
  'password' : data['password'] ? data['password'] : '',
  'description' : data['description'] ? data['description'] : '',
  'imgProfil' : data['imgProfil'] ? data['imgProfil'] : '',
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
    alert("La mise ?? jour ?? bien ??t?? effectu?? !")
  }, err => {
    alert("Un probl??me est survenu lors de la modification")
  })
}

// Delete
deleteArtist(){  
  this.dataService.deleteArtist(this.artistData._id)
  .subscribe(res => {
    alert("Vous avez supprim?? votre page !")
  })
}

getIdProfil(id:string){
  this.dataService.setIdArtist(id);
}
}
