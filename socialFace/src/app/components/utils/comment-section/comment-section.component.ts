import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrl: './comment-section.component.css'
})
export class CommentSectionComponent {
  commentForm: FormGroup;

  @Input() comments: string[] | undefined;

  @Output() commentAdded = new EventEmitter<string>();

  constructor(private formBuilder: FormBuilder) {
    this.commentForm = this.formBuilder.group({
      newComment: ['']
    });
  }

  addComment(): void {
    const COMMENT:string = this.commentForm.get('newComment')?.value;    
    if (COMMENT.length > 0 && this.comments) {      
      this.commentAdded.emit(COMMENT);
    }
  }
}
