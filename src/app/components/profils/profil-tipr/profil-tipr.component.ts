import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { tiprModel } from 'models/tipr.model';
import { TiprService } from 'src/app/services/tipr.service';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-profil-tipr',
  templateUrl: './profil-tipr.component.html',
  styleUrls: ['./profil-tipr.component.css']
})
export class ProfilTiprComponent implements OnInit {

  constructor(private tiprService : TiprService, private router : Router, private formbuilder : FormBuilder) { }

  formValue !: FormGroup;
  tiprData !: any;
  tiprModel : tiprModel = new tiprModel();
  tiprId !: any;

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      'prenom' : null,
      'nom' : null,
      'email' : null,
      'password' : null
    });

    let idTipr = this.tiprService.getIdTipr();

    this.tiprService.getTiprId().subscribe(data => {      
      if (data)
      this.tiprData = data[0];
      this.setValueData(this.tiprData);
    })
  }
  
  setValueData(data : any) {
    this.formValue.setValue({
      'prenom' : data['prenom'] ? data['prenom'] : '',
      'nom' : data['nom'] ? data['nom'] : '',
      'email' : data['email'] ? data['email'] : '',
      'password' : data['password'] ? data['password'] : '',
    })
 
  }

  updateTipr(){
    this.tiprData.prenom = this.formValue.value.prenom;
    this.tiprData.nom = this.formValue.value.nom;
    this.tiprData.email = this.formValue.value.email;
    this.tiprData.password = this.formValue.value.password;

    this.tiprService.updateTipr(this.tiprData, this.tiprData._id)
    .subscribe(res => {
    alert("La mise à jour à bien été effectué !")
    }, err => {
    alert("Un problème est survenu lors de la modification")
    })
  }

  deleteTipr(){    
    this.tiprService.deleteTipr(this.tiprData._id)
    .subscribe((res: any) => {
      alert("Vous avez supprimé votre page !")
    })
  }



}
