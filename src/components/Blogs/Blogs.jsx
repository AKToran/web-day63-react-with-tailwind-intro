import React, { useEffect, useState } from 'react';
import Blog from '../../Blog/Blog';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(()=>{
    fetch("https://dev.to/api/articles")
    .then(res => res.json())
    .then(data => {
      setBlogs(data);
    })
    .catch(err=> console.log(err));
  },[])

  // console.log(blogs);

  return (
    <div>
      <h3 className='text-3xl'>Available Blogs: {blogs.length}</h3>
      <div>
        {
          blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
        }
      </div>
    </div>
  );
};

export default Blogs;