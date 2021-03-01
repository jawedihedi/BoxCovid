import { PatientService } from './../../services/patient.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-registre-patient',
  templateUrl: './registre-patient.component.html',
  styleUrls: ['./registre-patient.component.css']
})
export class RegistrePatientComponent implements OnInit {

  userForm: FormGroup;
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private patientService: PatientService
  ) {
    this.userForm = this.formBuilder.group({
      nom: [''],
      prenom: [''],
      age: [''],
      tel: [''],
      email: [''],
      password: ['']

    })
  }

  ngOnInit() { }

  onSubmit(): any {
    this.patientService.registrePatient(this.userForm.value)
    .subscribe(() => {
        console.log('Data added successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/'))
      }, (err) => {
        console.log(err);
    });
  }

}
