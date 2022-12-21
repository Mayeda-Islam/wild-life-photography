import React from "react";

const BlogQuestionAnswer = ({ blog }) => {
  console.log(blog);
  return (
    <div
      key={blog.id}
      className="mb-6 flex flex-col items-center rounded-lg border shadow-md md:flex-row border-gray-700 "
    >
      <div className="flex flex-col justify-between p-4 leading-normal text-neutral-content">
        <h5 className="mb-2 text-center md:text-left text-2xl font-bold tracking-tight">
          {blog.question}
        </h5>
        <p className="mb-2 text-justify md:text-left  font-normal">
          {blog.answer}
        </p>
      </div>
    </div>
  );
};

export default BlogQuestionAnswer;
