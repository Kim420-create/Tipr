import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TiprService } from 'src/app/services/tipr.service';
import { tiprModel } from '../../../../../models/tipr.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-tipr',
  templateUrl: './form-tipr.component.html',
  styleUrls: ['./form-tipr.component.css']
})
export class FormTiprComponent implements OnInit {

  formValue !: FormGroup;
  tiprModelObj : tiprModel = new tiprModel();

  constructor( private formBuilder : FormBuilder,
    private tiprService : TiprService,  private router : Router) { }

  ngOnInit(): void { 
    this.formValue = this.formBuilder.group({
      prenom : ['', Validators.required],
      nom : ['', Validators.required],
      email : ['', Validators.required, Validators.email],
      password :['', Validators.required]
    })
  }

  postUserDetails(){
    this.tiprModelObj = this.formValue.value;
    this.tiprService.postTipr(this.tiprModelObj)  
    .subscribe(res => {
      this.tiprService.setIdTipr(res._id);
      alert("Un Tipr viens d'être ajouté !")
      this.formValue.reset();
      this.router.navigate(["/profil-tipr"]);
      
    }, err => {
      alert("Un problème est survenu lors de l'ajout")
    })
    
  }

  getIdProfil(id:string){
    this.tiprService.setIdTipr(id);

  }
}
