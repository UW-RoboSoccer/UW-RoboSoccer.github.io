import "./Blog.css"
import "@fontsource/jersey-25";
import image12 from "../assets/image2.png";
import image13 from "../assets/image2.png";
import "@fontsource/roboto";

const Blog = () => {
    return (
        <div className="blog-wrapper">
            <h1>ACHIEVEMENTS</h1>
            <div className="blog-box">
                <div className="blog1">
                    <img src={image12} alt="Image two" className="image12"/>
                    <h2>First Term Review</h2>
                    <p>Our team offers a unique hands on experience on working with bipedal robots and complex RL algorithms, allowing you to polish and hone your skills in an new but increasingly demanding environment</p>
                </div>
                <div className="blog2">
                    <img src={image13} alt="Image two" className="image13"/>
                    <h3>First Term Review</h3>
                    <p>Our team offers a unique hands on experience on working with bipedal robots and complex RL algorithms, allowing you to polish and hone your skills in an new but increasingly demanding environment</p>
                </div>
            </div>
        </div>
    )
};
export default Blog;