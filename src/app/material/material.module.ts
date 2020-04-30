import { NgModule } from '@angular/core';
import{ MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import{MatCardModule}from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import{MatProgressSpinnerModule} from '@angular/material/progress-spinner';



const MaterialComponents =[
  MatButtonModule,
  MatToolbarModule,
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatSortModule,
  MatPaginatorModule,
  MatCardModule,
  MatDialogModule,
  MatMenuModule,
  MatIconModule,
  MatProgressSpinnerModule

];

@NgModule({
  
  imports: [
    MaterialComponents
  ],exports:
  [
    MaterialComponents
  ]
})
export class MaterialModule { }
