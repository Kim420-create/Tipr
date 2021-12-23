import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { tiprModel } from '../../../../models/tipr.model';
// import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formValue !: FormGroup;
  userModelObj : tiprModel = new tiprModel();
  
  constructor(
    private formBuilder : FormBuilder,
    // private dataService : DataService,
  ) { }

  ngOnInit(): void {    
    this.formValue = this.formBuilder.group({
      id : [''],
      prenom : [''],
      nom : [''],
      email : [''],
      password :['']
    })
  }

  postUserDetails(){
    
    this.userModelObj.prenom = this.formValue.value.prenom;
    this.userModelObj.nom = this.formValue.value.nom;
    this.userModelObj.email = this.formValue.value.email;
    this.userModelObj.password = this.formValue.value.password;
  }
}
