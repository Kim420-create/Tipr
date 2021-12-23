import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { tiprModel } from '../../../../../models/tipr.model';

@Component({
  selector: 'app-form-tipr',
  templateUrl: './form-tipr.component.html',
  styleUrls: ['./form-tipr.component.css']
})
export class FormTiprComponent implements OnInit {

  formValue !: FormGroup;
  userModelObj : tiprModel = new tiprModel();

  constructor( private formBuilder : FormBuilder,
    private api : DataService) { }

  ngOnInit(): void {
    
    this.formValue = this.formBuilder.group({
      id : [''],
      prenom : ['', Validators.required],
      nom : ['', Validators.required],
      email : ['', Validators.required],
      password :['', Validators.required]
    })
  }

  postUserDetails(){
    
    this.userModelObj.prenom = this.formValue.value.prenom;
    this.userModelObj.nom = this.formValue.value.nom;
    this.userModelObj.email = this.formValue.value.email;
    this.userModelObj.password = this.formValue.value.password;

    this.api.postTipr(this.userModelObj)
    .subscribe(res => {
      console.log(res);
      alert("Un Tipr viens d'être ajouté !")
      this.formValue.reset();
    },
    err => {
      alert("Un problème est survenu lors de l'ajout")
    })
    
  }
}
