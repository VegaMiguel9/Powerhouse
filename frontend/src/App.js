import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./sections/home";
import GettingStarted from "./sections/gettingStarted";
import Plans from "./sections/plans";
import OurGym from "./sections/ourGym";
import Schedule from "./sections/schedule";
import Contact from "./sections/contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gettingStarted" element={<GettingStarted />} />
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
