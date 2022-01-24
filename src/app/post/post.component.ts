import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post: any;
  constructor(private router: Router) {
    this.post = this.router.getCurrentNavigation()?.extras.state;

   }

  ngOnInit(): void {
    this.post = history.state.currentPost;
  }

}
