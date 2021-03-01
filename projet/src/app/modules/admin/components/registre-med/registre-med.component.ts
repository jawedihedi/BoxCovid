import { MedecinService } from './../../services/medecin.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-registre-med',
  templateUrl: './registre-med.component.html',
  styleUrls: ['./registre-med.component.css']
})
export class RegistreMedComponent implements OnInit {

  userForm: FormGroup;
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private medecinService: MedecinService
  ) {
    this.userForm = this.formBuilder.group({
      email: [''],
      password: ['']
    })
  }

  ngOnInit() { }

  onSubmit(): any {
    this.medecinService.registreMes(this.userForm.value)
    .subscribe(() => {
        console.log('Data added successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/'))
      }, (err) => {
        console.log(err);
    });
  }

}
