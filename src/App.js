import logo from "./logo.svg";
import "./App.css";
import Info from "./Info";
function App() {
  document.title = "Dominik The North American Dream";
  return (
    <div className="App">
      <div class="div1">
        <h1 class="brand marginLeft">KRIS</h1>
        <h1 class="brand marginLeft">TIAN</h1>
        <h1 class="brand marginLeft">CAGE</h1>
      </div>
      <div class="inclination">
        <Info></Info>
        <div class="toTheCenter flexing">
          <img src="https://bloggertastic.com/wp-content/uploads/2023/11/dominik-mysterio-w1.jpg" />
          <p>I want to know what love is, why don't you show me?</p>
        </div>
        <div class="toTheRight flexing">
          <img src="https://bloggertastic.com/wp-content/uploads/2023/11/dominik-mysterio-w1.jpg" />
          <p>I want to know what love is, why don't you show me?</p>
        </div>
      </div>
    </div>
  );
}

export default App;
