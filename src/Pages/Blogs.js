import React, { useEffect, useState } from "react";
import BlogQuestionAnswer from "./BlogQuestionAnswer";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch(`https://wild-life-photography-server-mu.vercel.app/blogs`)
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="bg-gray-800 container mx-auto">
      <div className="w-5/6 md:w-2/3 lg:w-11/12 mx-auto pb-8 pt-6">
        <div className="flex flex-col items-center pb-6">
          <h3 className="text-3xl text-white mb-3">Interview Questions</h3>
          <div className="mb-2 border-b w-[120px] border-stone-300 rounded-lg"></div>
        </div>
        <div >
          {blogs.map((blog) => (
            <BlogQuestionAnswer blog={blog}></BlogQuestionAnswer>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
