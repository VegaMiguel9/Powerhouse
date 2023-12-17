import React from "react";
import NavBar from "../components/navBar/navBar";
import { Contact } from "../components/contact/Contact";
import Footer from "../components/footer/Footer";


function contact() {
  return (
    <div>
      <NavBar />
      <Contact/>
      <Footer />
    </div>
  );
}

export default contact;
