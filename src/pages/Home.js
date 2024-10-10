import React from "react";
import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";
import BlogPreview from "../components/BlogPreview";
import { image_carousel } from "../constants";
import { test, robot1on1, testbanner } from "../assets";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="home-page bg-rsBack">
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-cover bg-center">
        <img src={testbanner} alt="Banner" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full">
          <h1 className="text-5xl font-bold text-white text-center">Welcome to Our Design Team</h1>
          <p className="text-lg text-white mt-4">We Build, Innovate, and Compete Globally</p>
          <Link to="/join">
            <button className="bg-rs-purple text-white mt-4 py-2 px-4 rounded shadow-sm hover:shadow-md hover:bg-custom-hover">
              Get Involved
            </button>
          </Link>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-rsBack">
        <div className="container mx-auto flex justify-between items-start">
          {/* About Us Text */}
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold text-left ml-12">About Us</h2>
            <h3 className="text-2xl font-semibold text-left ml-12 mt-4">Who we are</h3>
            <p className="text-left text-lg ml-12 my-4 text-gray-600">
            Founded in 2024 by a group of UW Engineers, the heart of the UW RoboSoccer lies a passion for innovation and collaboration, 
            as we push the boundaries of autonomous robotics. We design, build,
            and program humanoid bipedal robots capable of playing soccer, an engineering 
            challenge that demands both technical mastery and creativity. 
            Competing in the prestigious RoboCup Humanoid League, our 
            robots must autonomously navigate the field, locate, control, and score a soccer ball, 
            and work together to achieve victory.
            </p>
          </div>

          {/* YouTube Video Embed */}
          <div className="max-w-lg mx-24 hidden lg:block">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/your-video-id" // Replace 'your-video-id' with the actual YouTube video ID
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* About the Competition Section */}
      <section className="py-20 bg-rsBack2">
        <div className="container mx-auto flex flex-col lg:flex-row items-start px-4 md:px-8">
          {/* Image Section */}
          <div className="lg:w-1/2 mb-8 lg:mb-0 lg:mr-8">
            <img
              src={robot1on1} // Replace with the actual path to your image
              alt="RoboCup Competition"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>

          {/* Text Section */}
          <div className="lg:w-1/2 lg:pl-12">
            <h3 className="text-2xl font-semibold text-left mt-4 mx-12">The Competition</h3>
            <p className="text-left text-lg my-4 mx-12 text-gray-600">
              The RoboCup Humanoid League is a global competition where teams of autonomous humanoid robots compete in soccer matches. UW Robosoccer is aiming to compete in the kid-sized humanoid league, where robots are limited to a height of between 40-100cm. It is a 4v4 autonomous soccer game, where a robot team works together to shoot, defend and score goals to win. To learn more, you can visit the official website of RoboCup 
              <a href="https://www.robocup.org/leagues/3" className="text-blue-500" target="_blank"> here</a>
            </p>
          </div>
        </div>
      </section>

      {/* Image Carousel and Blog Preview in 60-40 Split */}
      <section className="py-20 bg-rsBack sm-hidden">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Image Carousel (40%) */}
          <div className="col-span-2 mt-24">
            <div className="m-12">
              <Carousel images={image_carousel} />
            </div>
          </div>

          {/* Blog Preview (60%) */}
          <div className="ml-4 col-span-3 flex flex-col">
            <h3 className="ml-4 text-2xl font-semibold text-left mt-12">What we've done</h3>
            <p className="text-left text-lg ml-4 mr-12 my-8 text-gray-600">
              Here are some of our recent accomplishments and milestones we've reached as we continue on our path to competition in 2026! Click on the see all blog post button to learn more about each post. 
            </p>
            <BlogPreview />
            <Link to="/blog" className="ml-auto"> 
              <button className="ml-auto bg-rs-purple text-white mr-12 py-2 px-4 mt-4 rounded shadow-md hover:bg-custom-hover">
                See All Blog Posts
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Home;