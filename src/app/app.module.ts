import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { MedicamentsComponent } from './medicaments/medicaments.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import {MatAutocompleteModule,MatInputModule} from '@angular/material';
import {MatTableModule} from '@angular/material/table';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';


@NgModule({
  declarations: [
    AppComponent,
    MedicamentsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SweetAlert2Module.forRoot(),
    BrowserAnimationsModule,
      ReactiveFormsModule,
      MatInputModule,
    FormsModule,
      MatAutocompleteModule,
      MatTableModule,
      NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
