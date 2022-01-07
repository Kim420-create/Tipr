import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { FlashMessagesModule, FlashMessagesService } from 'flash-messages-angular';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  isLoginError : boolean = false;
  loginForm : any = FormGroup;
  artists : any = [];
  constructor(private fb:FormBuilder, private router : Router, private dataService : DataService, private authService : AuthService) { }


  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email : ['', Validators.compose([Validators.required, Validators.email])],
      password : ['', Validators.required]
    })

    this.dataService.getArtist().subscribe((data : any) => {
      this.artists = data;                  
     })
  }

  loginSubmit(data : any){

    if(data.email){
      this.artists.forEach((item : any) => {        
        if (item.email === data.email && item.password === data.password) {
          console.log("Profile valide !");
          localStorage.setItem("isLoggedIn", "true")
          this.router.navigate(['accueil']);
        }
        else {
          console.log("Profile non valide !");
          localStorage.clear();
        }
        
      });
    }
    
  }

  goToInscription(){
    this.router.navigate(['inscription'])
  }

  loginUser(){
    this.authService.login(this.loginForm.value)
  }

}
