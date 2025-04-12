import React from "react";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog }) => {
  const { title, description, cover_image, user, tag_list } = blog;
  const { profile_image_90, twitter_username } = user;
  return (
    <div className="card bg-base-100 w-full mt-4 shadow-sm">
      <figure>
        <img src={cover_image} alt="Shoes" />
      </figure>
      <FaBookmark className="absolute end-4" size={50} color="white"></FaBookmark>
      <div className="card-body">
        <div>
          {tag_list.map(tag=> <small className="text-sm"> #{tag}</small>)}
        </div>
        <h2 className="text-2xl font-semibold">{title}</h2>
        <div className="flex items-center gap-2">
          <img className="w-6 rounded-full" src={profile_image_90} alt="" />
          <h4 className="text-sm font-semibold">{twitter_username}</h4>
        </div>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Mark as Read</button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
