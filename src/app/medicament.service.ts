import { Injectable } from '@angular/core';
import {Medicament} from './Medicament';
import {MEDICAMENTS} from './example-medicament';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class MedicamentService {

  urlApi  = 'https://hds-staging.toktokdoc.com/BCBSearch/X/doliprane';
  constructor(private http: HttpClient) { }
  getMedicament(): Medicament[] {
    return MEDICAMENTS;
  }
  getAllMedicament() {
    return this.http.get<Medicament[]>(this.urlApi);
  }
  getMedicamentByName(name): any {
    return this.http.get(`${this.urlApi}${name}`);
  }
}
