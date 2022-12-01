import { Component, OnInit } from '@angular/core';
import { threadId } from 'worker_threads';
import { Post } from '../post';
import { PostService, put } from '../post.service';

@Component({
  selector: 'app-post-inattivi',
  templateUrl: './post-inattivi.component.html',
  styleUrls: ['./post-inattivi.component.scss']
})
export class PostInattiviComponent implements OnInit {
  d: any;
  posts: Post[] = [];
  constructor(private postSrv: PostService) { }

  ngOnInit(): void {
    this.postSrv.getPostFiltrati(false).then(res => this.posts = res)
  }

  changeActive(i: number, t: string, b: string, a: boolean, ty: string): void {
    this.d = {
      id: i,
      title: t,
      body: b,
      active: !a,
      type: ty,
    };
    put(i, this.d)
    console.log(this.d)
    window.location.reload();
  }

}
