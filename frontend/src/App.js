import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./sections/home";
import Plans from "./sections/plans";
import OurGym from "./sections/ourGym";
import Schedule from "./sections/schedule";
import Contact from "./sections/contact";
import MeetTheTeam from "./sections/meetTheTeam"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meetTheTeam" element={<MeetTheTeam />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/ourGym" element={<OurGym />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
