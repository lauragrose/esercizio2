import { Injectable } from '@angular/core';
import { Post } from './post';

export function getAllPosts(){
  return fetch("http://localhost:3000/posts/").then((res):Promise<Post[]>=>res.json())
}
export async function put(i:number, data: any){
  const response = await fetch(`http://localhost:3000/posts/${i}`, {
    method: 'PUT', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts:Post[] = []
  postsActive:Post[] = []
  postInactive:Post[] = []

  constructor() {
    // getAllPosts().then(res=>{
    //   this.posts = res
    //   this.postInactive = res.filter(e=>!e.active)
    //   this.postsActive = res.filter(e=>e.active)
    // })
  }

  getActivePost(){
    return this.postsActive
  }
  getInactivePost(){
    return this.postInactive
  }

  private getAllPosts() {
    return fetch("http://localhost:3000/posts/").then((res):Promise<Post[]>=>res.json())
  }

  getPostFiltrati(a:boolean) {
    return getAllPosts().then(res=>{
      return res.filter((e)=>{
        return e.active == a
      })
    })
  }

}
