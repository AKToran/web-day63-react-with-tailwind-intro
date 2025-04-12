import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="main-container flex gap-2">
        <div className="left-container w-3/4 ">
          <Blogs></Blogs>
        </div>
        <div className="right-container w-1/4 bg-gray-200">
          <h1>Blogs Read: </h1>
          <h1>Bookmarked: </h1>
        </div>
      </div>
    </>
  );
}

export default App;
