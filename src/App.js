import "./App.css";
import Info from "./Info";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Component/navbar";
import Home from "./Screen/Home";
import Tian from "./Screen/tian";
import Cage from "./Screen/Cage";
function App() {
  document.title = "Dominik The North American Dream";
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>

        <Routes>
          <Route>
            <Route path="/" element={<Home></Home>} />
            <Route path="/tian" element={<Tian></Tian>} />
            <Route path="/cage" element={<Cage></Cage>} />
            <Route path="/btflv" />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <div class="inclination">
        <Info></Info>
        <div class="toTheCenter flexing">
          <img
            alt="Dominik"
            src="https://bloggertastic.com/wp-content/uploads/2023/11/dominik-mysterio-w1.jpg"
          />
          <p>I want to know what love is, why don't you show me?</p>
        </div>
        <div class="toTheRight flexing">
          <img
            alt="Dominik2"
            src="https://bloggertastic.com/wp-content/uploads/2023/11/dominik-mysterio-w1.jpg"
          />
          <p>I want to know what love is, why don't you show me?</p>
        </div>
      </div> */}
    </div>
  );
}

export default App;
