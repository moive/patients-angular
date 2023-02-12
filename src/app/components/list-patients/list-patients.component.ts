import { Component, OnInit } from '@angular/core';
import { IListPatients } from 'src/app/models/listpatients.interface';
import { ApiService } from '../../services/api/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-patients',
  templateUrl: './list-patients.component.html',
  styleUrls: ['./list-patients.component.scss']
})
export class ListPatientsComponent implements OnInit {
  patients: IListPatients[] = [];

  constructor(private api: ApiService, private router: Router) {}
  ngOnInit(): void {
    this.api.getAllPatients().subscribe((data) => {
      this.patients = data;
    });
  }

  editPatient(id: string) {
    this.router.navigate(['/patients/edit', id]);
  }
}
