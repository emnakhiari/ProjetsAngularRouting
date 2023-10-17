import { Component } from '@angular/core';
import { Invoice } from '../model/Invoice';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-invoice-component',
  templateUrl: './invoice-component.component.html',
  styleUrls: ['./invoice-component.component.css']
})
export class InvoiceComponentComponent {
  id!:number;
  idp!:number;
  active!:boolean;
 

  constructor( private activatedroute : ActivatedRoute , private router : Router) { }
  ngOnInit()
  {
    this.id = Number(this.activatedroute.snapshot.params["id"]);
    this.idp = Number(this.activatedroute.snapshot.queryParams["idp"]);
    this.active = Boolean(this.activatedroute.snapshot.queryParams["activep"]);

    
  
      
   console.log(this.activatedroute.snapshot.queryParams['classe']);
   // this.idFacture=this.activatedroute.snapshot.paramMap.get("idFacture");
  }
  list : Invoice []=
    [
      {idFacture:1,montantFacture:120, montantRemise:10, dateFacture:"12/12/2021",
      active:true},
      {idFacture:2,montantFacture:1020, montantRemise:90, dateFacture:"22/11/2020"
      ,active:true},
      {idFacture:3,montantFacture:260, montantRemise:30, dateFacture:"18/10/2020",
      active:false},
      {idFacture:4,montantFacture:450, montantRemise:40, dateFacture:"14/12/2020",
      active:true},
      ]

      retour(){
        this.router.navigateByUrl("InvoiceMain")
      }
}
