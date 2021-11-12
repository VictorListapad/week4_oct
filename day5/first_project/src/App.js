import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Card from "./components/Card";

function App() {
  return (
    <div>
      <Navbar/>
      <h2 className="title">App JS</h2>
      <Card/>
      <Footer/>
    </div>
  );
}

export default App;
