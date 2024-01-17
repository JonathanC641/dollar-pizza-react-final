import React from "react";
// import Navbar from './components/navbar';
import Pizza from "./components/pizza";
import Menu from "./components/menu";
import Nav from "./components/navbar";
import Footer from "./components/footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Pizza />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
