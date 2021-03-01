import { EtatService } from './../service/etat.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-etat',
  templateUrl: './etat.component.html',
  styleUrls: ['./etat.component.css']
})
export class EtatComponent implements OnInit {

  constructor( private etatService : EtatService, private router: Router, private ngZone: NgZone) { }

  ngOnInit(): void {
  }
  onSubmit(): any {
    this.etatService.sendEtat();
  }


}
