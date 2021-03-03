//default things
import logo from "./logo.svg";
import "./App.css";

//routing libraries
import React, { Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";

//routing
import About from "./pages/about";
import Contact from "./pages/contact";
import Home from "./pages/home";
import BookRec from "./pages/book-rec-hist";
import Journal from "./pages/journal-hist";

//navbar libraries
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      {/* navigation bar components */}
      <ul>
        <li>
          <a class="active" href="/">
            Home
          </a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
        <li>
          <a href="/journal-hist">Journal History</a>
        </li>
        <li>
          <a href="/book-rec-hist">Book Rec History</a>
        </li>
      </ul>

      {/* content */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/* routing links to appropriate components */}
        <Router>
          <main>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/book-rec-hist" component={BookRec} />
            <Route path="/journal-hist" component={Journal} />
          </main>
        </Router>
      </header>
    </div>
  );
}

export default App;
