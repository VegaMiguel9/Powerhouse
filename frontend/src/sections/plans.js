import React from "react";
import NavBar from "../components/navBar/navBar";
import Plans from "../components/plans/plans";
import Footer from "../components/footer/Footer";

function plans() {
  return (
    <div>
      <NavBar />
      <div className="plansBottomMargin">
        <Plans />
      </div>
      <Footer />
    </div>
  );
}

export default plans;
