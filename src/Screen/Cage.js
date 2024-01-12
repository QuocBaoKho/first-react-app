import "../Design/home.css";
import Info from "../Component/info";
function Cage() {
  document.title = "Dominik The North American Dream";
  return (
    <div className="App">
      <div class="inclination">
        <Info></Info>
        <div class="toTheCenter flexing border-bruise">
          <img
            alt="Dominik"
            src="https://bloggertastic.com/wp-content/uploads/2023/11/dominik-mysterio-w1.jpg"
          />
          <p>I want to know what love is, why don't you show me?</p>
        </div>
        <div class="toTheRight flexing border-bruise">
          <img
            alt="Dominik"
            src="https://bloggertastic.com/wp-content/uploads/2023/11/dominik-mysterio-w1.jpg"
          />
          <p>I want to know what love is, why don't you show me?</p>
        </div>
      </div>
      <div class="toTheRight flexing border-bruise experiment">
        <h1 style={styles.title}>DOMINIK</h1>
        <img
          alt="Dominik"
          src="https://bloggertastic.com/wp-content/uploads/2023/11/dominik-mysterio-w1.jpg"
        />
        <p>I want to know what love is, why don't you show me?</p>
      </div>
    </div>
  );
}
const styles = {
  title: {
    fontSize: 44,
    fontFamily: "Arial",
    margin: 20,
  },
};
export default Cage;
