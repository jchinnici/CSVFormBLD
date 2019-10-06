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
  selector: 'csvformbld',
  templateUrl: './csvform.component.html',
  styleUrls: ['./csvformstylesheet.css']
})
export class CSVFormComponent
{
  
  fields = [];
  formName: string = "";
  isNewRow: boolean = false;

  namePattern: string = "^[A-Za-z0-9 _!@#$%^&*(),.?:]*[A-Za-z0-9][A-Za-z0-9 _!@#$%^&*(),.?]*$";  

 
  createField(type:string, pattern : string){
    this.fields.push({
      type: type,
      pattern: pattern
    });
  }
  



}


