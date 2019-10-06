import { Component, Inject, ViewChild, ElementRef, AfterViewInit, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Input } from '@angular/compiler/src/core';
import { MenuItem } from 'primeng/api';
import { AccordionModule } from 'primeng/accordion';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button'
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DragDropModule } from 'primeng/dragdrop';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'csvfilebld',
  templateUrl: './csvfilebld.component.html',
  styleUrls: ['./csvstylesheet.css']
})
export class CSVFileBLDComponent
{
  constructor(private http: HttpClient) { }
  formName: string = "";
  isNewRow: boolean = false;
  

  form: any = {
    fields : [] 
  }; 

  namePattern: string = "^[A-Za-z0-9 _!@#$%^&*(),.?:]*[A-Za-z0-9][A-Za-z0-9 _!@#$%^&*(),.?]*$";  

 
  createField(type:string, pattern : string){
    this.form.fields.push({
      type: type,
      pattern: pattern
    });
  }
  
  submit() {
    console.log(this.form);
    this.http.post("/api/form/submit", this.form).subscribe(); 

  }


}


