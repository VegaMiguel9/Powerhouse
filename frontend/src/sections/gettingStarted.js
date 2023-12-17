import React from "react";
import NavBar from "../components/navBar/navBar"
import GettingStarted from "../components/gettingStarted/GettingStarted";
import Footer from "../components/footer/Footer"

function gettingStarted() {
  return (
    <div>
      <NavBar />
      <GettingStarted />
      <Footer />
    </div>
  );
}

export default gettingStarted;
