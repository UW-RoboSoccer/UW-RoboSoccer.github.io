import React from "react";
import { blogs } from "../constants";

const BlogPreview = () => {
  return (
    <div className="blog-preview max-h-64 overflow-y-scroll">
      <div className="space-y-4 p-4">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="p-4 bg-white shadow-md rounded-md hover:bg-gray-100 hover:shadow-lg transition-all duration-300"
          >
            <h3 className="text-xl font-semibold">{blog.title}</h3>
            <p className="text-gray-500 text-sm">{blog.date}</p>
            <p className="mt-4 text-gray-600">{blog.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPreview;
