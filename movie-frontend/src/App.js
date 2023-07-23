import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Movie from "./Component/Movie/index";

function App() {
  return (
    // <Router>
    //   <Route path="/" exact component={Movie} />
    // </Router>
    <Movie />
  );
}

export default App;
