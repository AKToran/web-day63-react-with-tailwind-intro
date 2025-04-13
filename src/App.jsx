import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [bookmark, setBookmark] = useState([]);

  const handleBookmark = (blog) => {
    const duplicate = bookmark.find((booked) => booked.id === blog.id);
    if (!duplicate) {
      const newBookmark = [...bookmark, blog];
      setBookmark(newBookmark);
    }
  };

  const [commentsCounter, setCommentsCounter] = useState(0);
  const handleCommentsCounter = (blog) => {
    setCommentsCounter(commentsCounter + blog.comments_count);

    const newBookmark = bookmark.filter((booked) => booked.id != blog.id);
    setBookmark(newBookmark);
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="main-container flex gap-2">
        <div className="left-container w-3/4 ">
          <Blogs
            handleBookmark={handleBookmark}
            handleCommentsCounter={handleCommentsCounter}
          ></Blogs>
        </div>
        <div className="right-container w-1/4 p-2 bg-gray-200">
          <h1 className="text-lg">Total comments count: {commentsCounter} </h1>
          <h1 className="text-lg">Bookmarked: {bookmark.length}</h1>
          {bookmark.map((blog) => (
            <h2 key={blog.id} className="border-1 p-1 bg-white">
              {blog.title}
            </h2>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
