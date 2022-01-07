import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { artistFormModel } from '../../../../../models/form.artist.model';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-form-artist',
  templateUrl: './form-artist.component.html',
  styleUrls: ['./form-artist.component.css'],
})

export class FormArtistComponent implements OnInit {
  formValue!: FormGroup;
  artistModelObj: artistFormModel = new artistFormModel();
  artistData!: any;

  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private router: Router,
    private authService: AuthService
  ) {}
  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      stageName: ['', Validators.required],
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      socialMedia: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  postArtistDetails() {
    this.artistModelObj = this.formValue.value;
    this.dataService.postArtist(this.artistModelObj)
    .subscribe((res) => {
        console.log(res);
        this.dataService.setIdArtist(res._id);     
           
        alert("Un artiste viens d'être ajouté !");
        this.formValue.reset();
        this.router.navigate(['/profil-artist']);
      },
      (err) => {
        alert("Un problème est survenu lors de l'ajout");
      }
    );
  }

  getIdProfil(id: string) {
    this.dataService.setIdArtist(id);
  }
}
