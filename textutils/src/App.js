// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
// import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  const[mode, setMode] = useState("light");
  const ColorSet=()=>{
    if (mode === "light"){
      setMode("dark")
      ShowAlert("enable dark mode","danger")
    }
    else{
      setMode("light")
      ShowAlert("enable light mode","danger")
    }
  }
  const[alert, setAlert] = useState(null);
        const ShowAlert = (message,type)=>{
          setAlert({
            msg:message,
            type:type
          })
        }
  return (
      <>
    {/* <Router>
    <Navbar title="TextUtils" mode={mode} colorr={ColorSet} linku="http://google.com"/>
      <Routes>
          <Route exact path="/" element={<TextForm heading="React"/>}></Route>
          <Route exact path="/about" element={<About/>}></Route>
    </Routes>
    </Router> */}
    <Navbar title="TextUtils" mode={mode} colorr={ColorSet} linku="http://google.com"/>
    <TextForm ShowAlert={ShowAlert} heading="React"/>
    </>
)}

export default App
    