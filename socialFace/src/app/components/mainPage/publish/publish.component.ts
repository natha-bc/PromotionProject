import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrl: './publish.component.css',
})
export class PublishComponent {
  publishForm: FormGroup;
  isUserTyping: boolean = false;

  constructor(public dialogRef: MatDialogRef<PublishComponent>) {
    this.publishForm = new FormGroup({
      textContent: new FormControl(''),
      password: new FormControl(''),
    });

    const TEXT_CONTENT_CONTROL = this.publishForm.get('textContent');
    if (TEXT_CONTENT_CONTROL) {
      TEXT_CONTENT_CONTROL.valueChanges.subscribe((value) => {
        if (value.length > 0) {
          this.isUserTyping = true;
          return this.isUserTyping;
        } else {
          this.isUserTyping = false;
          return this.isUserTyping;
        }
      });
    }
  }

  onSubmit() {

  }

  cancelPublish() {
    this.dialogRef.close();
  }
}
