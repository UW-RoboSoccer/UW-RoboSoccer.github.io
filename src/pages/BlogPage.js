import React, { useState } from "react";
import { Link } from "react-router-dom";
import { blogs } from "../constants"; // Assuming blogs are imported from constants.js
import { test, testbanner } from "../assets"; // Assuming the background image is imported
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/solid'; // Import Heroicons for arrows
import Footer from '../components/Footer';

const BlogPage = () => {
  // State to store sorted blogs and the current sort order
  const [sortedBlogs, setSortedBlogs] = useState(blogs);
  const [isAscending, setIsAscending] = useState(true); // State to track sort order

  // Function to toggle between ascending and descending order
  const toggleSortOrder = () => {
    const sorted = [...sortedBlogs].reverse(); // Reverse the order of the blogs
    setSortedBlogs(sorted); // Update sorted blogs
    setIsAscending(!isAscending); // Toggle the sort order state
  };

  return (
    <div className="blog-page">
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-cover bg-center">
        <img src={testbanner} alt="Banner" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white text-center">Blog</h1>
          <p className="text-base md:text-lg text-white mt-4 text-center">Our progress throughout the journey</p>
        </div>
      </section>

      {/* Blog Section */}
      <div className="py-10 md:py-20 w-full bg-rsBack">
        <div className="px-4 md:px-24">
          {/* Flexbox for splitting the screen between the paragraph and the sorting button */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-4">
            <div className="w-full md:w-2/3 pr-0 md:pr-4"> {/* Paragraph Text */}
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Blog</h2>
              <p className="text-gray-600 text-base md:text-lg my-8">
                This is where we will share our progress and experiences as we build and prepare for the upcoming competition!
                Feel free to explore and see what challenges we have faced and the milestones we have reached by overcoming them. 
              </p>
            </div>

            <div className="w-full md:w-1/3 pl-0 md:pl-4 text-right"> {/* Sorting Button */}
              <button
                onClick={toggleSortOrder}
                className="inline-flex items-center px-4 py-2 bg-custom-hover text-white shadow-md rounded-md transition hover:bg-rs-purple"
              >
                {isAscending ? (
                  <>
                    <ChevronUpIcon className="h-5 w-5 mr-2" />  Earliest
                  </>
                ) : (
                  <>
                    <ChevronDownIcon className="h-5 w-5 mr-2" />  Latest
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Light Gray Line Break */}
          <hr className="border-t border-gray-300 my-8" />

          <div className="space-y-8">
            {sortedBlogs.map((blog, index) => (
              <BlogItem key={blog.id} blog={blog} index={index} />
            ))}
          </div>

          {/* Light Gray Line Break */}
          <hr className="border-t border-gray-300 m-8" />  
        </div>
      </div>
      <Footer />
    </div>
  );
};

// BlogItem Component to handle the "Read More" functionality
const BlogItem = ({ blog, index }) => {
  const [isExpanded, setIsExpanded] = useState(false); // State for toggling content visibility

  const toggleContent = () => {
    setIsExpanded(!isExpanded); // Toggle the expanded state
  };

  // Alternating background color based on the index
  const backgroundColor = index % 2 === 0 ? "bg-rsBack2" : "bg-rsBack2";
  const hoverColor = index % 2 === 0 ? "hover:bg-gray-100" : "hover:bg-white";

  return (
    <div className="w-full">
      <div className={`${backgroundColor} px-4 md:mx-24 p-6 shadow-md rounded-lg relative flex flex-col`}>
        <h3 className="text-2xl font-bold">{blog.title}</h3>
        <p className="text-gray-500 text-sm">{blog.date}</p>
        <p className="mt-4 text-gray-600">{blog.summary}</p>

        {/* Conditionally render full blog content */}
        {isExpanded && <p className="mt-4 mb-10 text-gray-700">{blog.content}</p>}

        {/* Button to toggle the full content, positioned at the bottom right */}
        <div className="flex-grow"></div> {/* Spacer to push button to bottom */}
        <div className="absolute bottom-2 right-2">
          <button
            onClick={toggleContent}
            className={`mt-4 py-1 px-2 bg-transparent shadow-md text-gray-800 rounded-md transition hover:bg-rs-purple`}
          >
            {isExpanded ? "▲" : "▼"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;