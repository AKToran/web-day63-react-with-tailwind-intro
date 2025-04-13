import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [bookmark, setBookmark] = useState([]);

  const handleBookmark = (blog) => {
    const newBookmark = [...bookmark, blog];
    setBookmark(newBookmark);
  }

  return (
    <>
      <Navbar></Navbar>
      <div className="main-container flex gap-2">
        <div className="left-container w-3/4 ">
          <Blogs handleBookmark={handleBookmark}></Blogs>
        </div>
        <div className="right-container w-1/4 bg-gray-200">
          <h1>Blogs Read: </h1>
          <h1>Bookmarked: {bookmark.length}</h1>
          {
            bookmark.map(blog => <h2 key={blog.id} className="border-1 p-1 m-1">{blog.title}</h2>)
          }
        </div>
      </div>
    </>
  );
}

export default App;
