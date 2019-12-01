import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MedicamentService {
  urlApiName  = 'https://hds-staging.toktokdoc.com/BCBSearch/X/';
  constructor(private http: HttpClient) { }
  getMedicamentByName(name): any {
    return this.http.get(`${this.urlApiName}${name}`);
  }
}
