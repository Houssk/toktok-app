import { Component, OnInit } from '@angular/core';
import {Medicament} from '../Medicament';
import { MedicamentService } from '../medicament.service';
import {elementEventFullName} from '@angular/compiler/src/view_compiler/view_compiler';


@Component({
  selector: 'app-medicaments',
  templateUrl: './medicaments.component.html',
  styleUrls: ['./medicaments.component.css']
})
export class MedicamentsComponent implements OnInit {

  medicaments: Medicament[];
  listMedicament = [];
  nameMedicament: string = '';
  result: [];

  constructor(private medicamentService: MedicamentService) {
  }
  getMedicament(): void {
    this.medicaments = this.medicamentService.getMedicament();
  }
  getMedicamentService(): void {
    this.medicamentService.getAllMedicament().subscribe(
      data =>{
        data.map(element=>{
          this.listMedicament.push(element.nom);
        });
      }
    );
  }
  getMedicamentByName() {
    if(this.nameMedicament.length > 3) {
      this.listMedicament.forEach(element => {
      if(element.toLowerCase().includes(this.nameMedicament.toLowerCase())) {
          console.log(element);
          };
      });
    }
    return this.result;
  }
  ngOnInit() {
    this.getMedicament();
    this.getMedicamentService();
    console.log(this.listMedicament);
  }
}
