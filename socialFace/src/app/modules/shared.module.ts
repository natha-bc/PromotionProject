import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatDialogModule,
    HttpClientModule 
  ],
  exports: [
    CommonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatDialogModule,
    HttpClientModule 
  ]
})
export class SharedModule { }
