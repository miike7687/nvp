import React from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Tickets from "./components/Tickets";
import PastShows from "./components/PastShows";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Route exact path="/" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/tickets" component={Tickets} />
        <Route exact path="/pastshows" component={PastShows} />

        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
