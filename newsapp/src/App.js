import React, {useState} from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App=()=> {
  let api = process.env.REACT_APP_NEWS_API
  let[progress, setProgress]=useState(10)
 

    return (
      <div> 
        <Router basename='/React'>
          <Navbar />
          <LoadingBar
          color="#f11946"
          progress={progress} 
          />
          <Routes>
            <Route
              exact
              path="/"
              element={<News api={api} setProgress={setProgress} key="general" pageSize={10} category="general" />}
            />
            <Route
              exact
              path="/NEWS"
              element={<News api={api} setProgress={setProgress} key="general1" pageSize={10} category="general" />}
            />
            <Route
              exact
              path="/business"
              element={<News api={api} setProgress={setProgress} key="business" pageSize={10} category="business" />}
            />
            <Route
              exact
              path="/health"
              element={<News api={api} setProgress={setProgress} key="health" pageSize={10} category="health" />}
            />
            <Route
              exact
              path="/entertainment"
              element={<News api={api} setProgress={setProgress} key="entertainment" pageSize={10} category="entertainment" />}
            />
            <Route
              exact
              path="/science"
              element={<News api={api} setProgress={setProgress} key="science" pageSize={10} category="science" />}
            />
            <Route
              exact
              path="/sports"
              element={<News api={api} setProgress={setProgress} key="sports" pageSize={10} category="sports" />}
            />
            <Route
              exact
              path="/technology"
              element={<News api={api} setProgress={setProgress} key="technology" pageSize={10} category="technology" />}
            />
          </Routes>
        </Router>
      </div>
    );
  }

export default App