import React from "react";
import { Link } from 'react-router-dom';
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />

      {/* Register Button */}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <Link to="/register">
          <button style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
            Register
          </button>
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
