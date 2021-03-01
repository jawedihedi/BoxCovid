import { PatientService } from './../../services/patient.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-liste-patient',
  templateUrl: './liste-patient.component.html',
  styleUrls: ['./liste-patient.component.css']
})
export class ListePatientComponent implements OnInit {
  Users:any = [];

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.patientService.GetPatients().subscribe(res => {
      console.log(res)
      this.Users =res;
    });
  }

}
