import { Component, NgModule, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-qrcode-generator',
  templateUrl: './qrcode-generator.component.html',
  styleUrls: ['./qrcode-generator.component.css']
})

export class QrcodeGeneratorComponent implements OnInit {


  constructor(private api : DataService) { }
  
  id : string = "";


  ngOnInit(): void {
   
  }

}
