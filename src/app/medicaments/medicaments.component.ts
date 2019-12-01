import { Component, OnInit } from '@angular/core';
import {Medicament} from '../Medicament';
import { MedicamentService } from '../medicament.service';
import { FormControl } from "@angular/forms";
import {Posologie} from '../Posologie';
import {DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'app-medicaments',
  templateUrl: './medicaments.component.html',
  styleUrls: ['./medicaments.component.css']
})
export class MedicamentsComponent implements OnInit {

  medicaments =  [];
  listMedicament = [];
  nameMedicament: string = '';
  control = new FormControl();
  constructor(private medicamentService: MedicamentService,private sanitizer: DomSanitizer) {
  }
  getMedicamentTwo(nameMedicament){
      this.nameMedicament = nameMedicament;
      this.listMedicament = [];
      if(this.nameMedicament.length > 3 ) {
          this.medicamentService.getMedicamentByName(this.nameMedicament).subscribe(
              data => {
                  data.map(element => {
                      if(element.nom.toLowerCase().includes(nameMedicament.toLowerCase()))
                      this.listMedicament.push(element.nom);
                  });
              }
          );
      }
  }

  selectionChange(item) {
    let medicament = new Medicament(item,new Posologie(0,0,0))
    this.medicaments.push(medicament);
  }
  onDelete(medicament){
    let index = this.medicaments.indexOf(medicament);
    if (index > -1) {
      this.medicaments.splice(index, 1);
    }
  }
  generateDownloadJsonUri() {
        const theJSON = JSON.stringify(this.medicaments);
        const uri = this.sanitizer.bypassSecurityTrustUrl("data:text/json;charset=UTF-8," + encodeURIComponent(theJSON));
        return uri;
  }
  onFileChanged(event) {
        const selectedFile = event.target.files[0];
        const fileReader = new FileReader();
        fileReader.readAsText( selectedFile, "UTF-8");
        fileReader.onload = () => {
            let json = JSON.parse(fileReader.result.toString());
            json.forEach(element => {
                this.medicaments.push(element);
            });
        };
        fileReader.onerror = (error) => {
            console.log(error);
        };
    }
  ngOnInit() {

  }
}
