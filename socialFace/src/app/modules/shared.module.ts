import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatDialogModule,
  ],
  exports: [
    CommonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatDialogModule,
  ]
})
export class SharedModule { }
