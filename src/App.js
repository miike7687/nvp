import React from "react";
import Home from "./components/Home";

import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Tickets from "./components/Tickets";
import PastShows from "./components/PastShows";
import Atap from "./pages/ATAP";
import Fame from "./pages/Fame";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/tickets" component={Tickets} />
        <Route exact path="/pastshows" component={PastShows} />
        <Route exact path="/pages/atap" component={Atap} />
        <Route exact path="/pages/fame" component={Fame} />

        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
