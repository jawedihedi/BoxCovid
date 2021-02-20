import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormationService } from '../../admin/services/formation.service';
import { Router, ActivatedRoute } from '@angular/router';
import Formation from '../../admin/models/formation';
import { NavbarService } from '../service/navbar.service';
import { AuthService } from '../../auth/auth.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-formation-details',
  templateUrl: './formation-details.component.html',
  styleUrls: ['./formation-details.component.css']
})
export class FormationDetailsComponent implements OnInit {

  formation: Formation;
  idformation:any;
   
  constructor(private messageService: MessageService,private route: ActivatedRoute, private auth: AuthService,private formationService :FormationService,public nav: NavbarService) {
    setInterval(() => {
      this.route.params.subscribe(params => {
        this.idformation = params.id;
        this.formationService.editBusiness(params.id).subscribe(res => {
          this.formation = res as Formation;
        });
    }) }, 1000);

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.idformation = params.id;
      this.formationService.editBusiness(params.id).subscribe(res => {
        this.formation = res as Formation;
      });
    });
    if(this.auth.isLoggedIn()){
      this.nav.LoggedIn = true;
     }
 


}
}
