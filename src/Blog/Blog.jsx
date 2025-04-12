import React from "react";

const Blog = ({ blog }) => {
  const { title, description, cover_image } = blog;
  return (
    <div className="card bg-base-100 w-full mt-4 shadow-sm">
      <figure>
        <img
          src={cover_image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Mark as Read</button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
