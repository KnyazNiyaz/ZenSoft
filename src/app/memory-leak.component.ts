import { Component } from '@angular/core';
import {BlogService} from './blog.service';
import {Blog} from "./blog";
import {Router} from "@angular/router";

@Component({
  selector: 'memory-leak',
  templateUrl: './memory-leak.component.html',
  styleUrls: ['./memory-leak.component.css']
})
export class MemoryLeakComponent {
  blog: Blog = new Blog();

  constructor(private service: BlogService,
              private router: Router) {
  }

  addBlog() {
    if(this.blog.title){
      this.service.addBlog(this.blog);
    }
    this.blog = new Blog();
  }


  removeTodo(blog) {
    this.service.deleteBlogById(blog.id);
  }

  openWarningPopup(blog): void {
    let params = {
      name: 'amirkhan',
      age: 23,
      a: blog
    };
    this.router.navigate(['info'], {queryParams: blog});
  }

  get blogs() {
    return this.service.getAllBlogs();
  }

  editBlog(blog){
    blog.isEdit = !blog.isEdit;
    this.service.refactorBlogById(blog.id);
  }

  showBlog(blog){
    this.service.presentBlog(blog.id);
  }
}
