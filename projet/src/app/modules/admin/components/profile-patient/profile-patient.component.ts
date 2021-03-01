import { Component, OnInit, NgZone } from '@angular/core';
import { PatientService } from '../../services/patient.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-patient',
  templateUrl: './profile-patient.component.html',
  styleUrls: ['./profile-patient.component.css']
})
export class ProfilePatientComponent implements OnInit {

  Etat:any = [];
  getId: any;
  constructor(private patientService: PatientService,  private router: Router, private ngZone: NgZone, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');
    this.patientService.getEtatPatient(this.getId).subscribe(res => {
      console.log(res)
      this.Etat = res;
    });
  }

}
