import {Blog} from './blog';

describe('Todo', () => {
  it('should create an instance', () => {
    expect(new Blog()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    const blog = new Blog({
      title: 'hello',
      complete: true
    });
    expect(blog.title).toEqual('hello');
    expect(blog.description).toEqual('hello world');
    expect(blog.complete).toEqual(true);
  });
});
