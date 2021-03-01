import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgZone } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { OrdonnanceService } from '../../services/ordonnance.service';

@Component({
  selector: 'app-create-ordannace',
  templateUrl: './create-ordannace.component.html',
  styleUrls: ['./create-ordannace.component.css']
})
export class CreateOrdannaceComponent implements OnInit {
  OrdForm: FormGroup;
  // tslint:disable-next-line: max-line-length
  constructor(public formBuilder: FormBuilder, private ordo: OrdonnanceService,  private router: Router, private ngZone: NgZone, private activatedRoute: ActivatedRoute) {
    this.OrdForm = this.formBuilder.group({
      medicament: ['']
    })
   }
  getId: any;

  ngOnInit(): void {
  this.getId = this.activatedRoute.snapshot.paramMap.get('id');
  }
  onSubmit(): any {
    this.ordo.ajoutordonnance(this.OrdForm.value, this.getId)
    .subscribe(() => {
        console.log('Data added successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/'))
      }, (err) => {
        console.log(err);
    });
  }

}
