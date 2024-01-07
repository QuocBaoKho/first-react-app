import "../Design/home.css";
import Info from "../Component/info";
function Home() {
  document.title = "Dominik The North American Dream";
  return (
    <div className="App">
      <div class="inclination">
        <Info></Info>
        <div class="toTheCenter flexing">
          <img alt="Dominik" src="https://bloggertastic.com/wp-content/uploads/2023/11/dominik-mysterio-w1.jpg" />
          <p>I want to know what love is, why don't you show me?</p>
        </div>
        <div class="toTheRight flexing">
          <img alt="Dominik" src="https://bloggertastic.com/wp-content/uploads/2023/11/dominik-mysterio-w1.jpg" />
          <p>I want to know what love is, why don't you show me?</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
