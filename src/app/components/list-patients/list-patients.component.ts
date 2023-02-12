import { Component, OnInit } from '@angular/core';
import { IListPatients } from 'src/app/models/listpatients.interface';
import { ApiService } from '../../services/api/api.service';

@Component({
  selector: 'app-list-patients',
  templateUrl: './list-patients.component.html',
  styleUrls: ['./list-patients.component.scss']
})
export class ListPatientsComponent implements OnInit {
  patients: IListPatients[] = [];

  constructor(private api: ApiService) {}
  ngOnInit(): void {
    this.api.getAllPatients().subscribe((data) => {
      this.patients = data;
    });
  }
}
