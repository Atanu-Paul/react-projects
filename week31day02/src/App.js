import React from "react";
// import logo from './logo.svg';
import "./App.css";

//importing the componenets
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Login from "./components/login";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Login />
      <Footer />
    </div>
  );
}

export default App;
