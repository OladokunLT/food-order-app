import './App.css';
import Navbar from './components/Navbar';
import Home from "./pages/Home";
import Footer from "./components/Footer"
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Home />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
