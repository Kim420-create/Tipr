import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private api : DataService) { }
  // id : string = "";

  ngOnInit(): void {
    // this.api.idTest.subscribe(data => {
    //   this.id = data ;
    //   console.log("Profil ID : ",this.id);
      
    // })
  }

}
