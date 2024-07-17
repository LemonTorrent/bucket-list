import React, { Component } from "react";
import Modal from "./components/Modal";
import Header from "./components/Header";
import axios from "axios";
import Home from './Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<Home />} />
        </Routes>
      </div>
    );
  }
}

export default App;