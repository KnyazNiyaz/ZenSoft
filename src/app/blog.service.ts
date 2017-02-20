import { Injectable } from '@angular/core';
import { Blog } from './blog';

@Injectable()
export class BlogService {

  lastId = 0;
  blogs: Blog[] = [];

  constructor() {
  }

  addBlog(blog: Blog): BlogService {
    console.log('da');
    if (!blog.id) {
      blog.id = ++this.lastId;
    }
    this.blogs.push(blog);
    return this;
  }

  deleteBlogById(id: number): BlogService {
    this.blogs = this.blogs
      .filter(blog => blog.id !== id);
    return this;
  }

  updateBlogById(id: number, values: Object = {}): Blog {
    let blog = this.getBlogById(id);
    if (!blog) {
      return null;
    }
    Object.assign(blog, values);
    return blog;
  }


  getAllBlogs(): Blog[] {
    console.log(this.blogs);
    return this.blogs;
  }

  refactorBlogById(blog){
    console.log(blog)
  }


  getBlogById(id: number): Blog {
    return this.blogs
      .filter(blog => blog.id === id)
      .pop();
  }


  presentBlog(id: number){
    let blog = this.getBlogById(id);
    if (!blog) {
      return null;
    }
    blog.isShown = !blog.isShown;
  }
}
