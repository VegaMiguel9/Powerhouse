import React from "react";
import NavBar from "../components/navBar/navBar";
import HomePage from "../components/home/HomePage";
import Footer from "../components/footer/Footer";


function home() {
  return (
    <div>
      <NavBar/>
      <HomePage/>
      <Footer />
    </div>
  );
}

export default home;
