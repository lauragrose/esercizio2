import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService, put } from './../post.service'

@Component({
  selector: 'app-post-attivi',
  templateUrl: './post-attivi.component.html',
  styleUrls: ['./post-attivi.component.scss']
})
export class PostAttiviComponent implements OnInit {

  d: any;
  posts: Post[] = []

  constructor(private postSrv: PostService) { }

  ngOnInit(): void {
    this.postSrv.getPostFiltrati(true).then(res => this.posts = res)
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
