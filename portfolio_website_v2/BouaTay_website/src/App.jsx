import { Routes, Route ,Navigate  } from "react-router";
import About from "./components/Pages/About/About";
import Home from "./components/Pages/Home/Home";
import Portfolio from "./components/Pages/Portfolio/Portfolio";
import Contact from "./components/Pages/Contact/Contact";
import styles from "./App.module.css";
import Navbar from "./components/navbar/navbar";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <div className={styles.navbar}>
      <Navbar />
      </div>
      
      <Routes>
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
