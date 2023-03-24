import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const BlogQuestionAnswer = ({ blog }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      data-aos="fade-up"
      key={blog.id}
      className="card w-96 bg-base-100 shadow-xl"
    >
      <div className="card-body text-start">
        <h2 className="card-title font-extrabold  text-violet-400">
          {" "}
          {blog.question}
        </h2>
        <p className="text-justify font-medium text-slate-600">{blog.answer}</p>
      </div>
    </div>
  );
};

export default BlogQuestionAnswer;
