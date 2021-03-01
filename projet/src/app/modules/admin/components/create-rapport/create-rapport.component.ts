import { RapportService } from './../../services/rapport.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgZone } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-create-rapport',
  templateUrl: './create-rapport.component.html',
  styleUrls: ['./create-rapport.component.css']
})
export class CreateRapportComponent implements OnInit {
  OrdForm: FormGroup;
  // tslint:disable-next-line: max-line-length
  constructor(public formBuilder: FormBuilder, private ordo: RapportService,  private router: Router, private ngZone: NgZone, private activatedRoute: ActivatedRoute) {
    this.OrdForm = this.formBuilder.group({
      descpription: ['']
    })
   }
  getId: any;

  ngOnInit(): void {
  this.getId = this.activatedRoute.snapshot.paramMap.get('id');
  }
  onSubmit(): any {
    this.ordo.ajoutRapport(this.OrdForm.value, this.getId)
    .subscribe(() => {
        console.log('Data added successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/'))
      }, (err) => {
        console.log(err);
    });
  }

}
