import './App.css';
import Navbar from './components/Navbar';
import Home from "./pages/Home";
import Footer from "./components/Footer"
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Menu from "./pages/Menu.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Home />
        <Menu />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
