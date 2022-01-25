import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  comment: any = "";
  commentArray: any = [];

post() {
  this.commentArray.push(this.comment);
  this.comment = "";
}
  constructor() { }

  ngOnInit(): void {
  }

}
