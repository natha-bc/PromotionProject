import { Component, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PublishComponent } from '../publish/publish.component';

@Component({
  selector: 'app-user-feed',
  templateUrl: './user-feed.component.html',
  styleUrl: './user-feed.component.css',
  encapsulation: ViewEncapsulation.None // Add this line
  
})
export class UserFeedComponent {
  constructor(public publishDialog:MatDialog) {
    console.log("constructor");
  }

  openPublish() {
    console.log("openPublish");
    this.publishDialog.open(PublishComponent, {
      width: '600px',  
      height: 'auto',  
      panelClass: 'custom-dialog-container',      
    });
  }
  
}
