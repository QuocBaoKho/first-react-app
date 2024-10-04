import "../Design/home.css";
import Info from "../Component/info";
import { useEffect } from "react";
function Cage() {
  const CucoDoi = (decisions) => {
    const jesse = "Jesse";
    return function () {
      const speech = `${jesse}, I have decided to ${decisions}`;
      console.log(speech);
    };
  };
  const life = CucoDoi("kill you");
  life();
  let slideIndex = 0;
  const showSlide = (n) => {
    let slides = document.getElementsByClassName("slideDefault");
    if (n >= slides.length) slideIndex = 0;
    if (n < 0) slideIndex = slides.length - 1;
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    console.log(slides[1] + "...");
    console.log(slideIndex + "...");
    slides[slideIndex].style.display = "block";
  };
  const plusSlide = (n) => {
    showSlide((slideIndex += n));
  };
  function sayMyName() {
    const name = "Heisenberg";
    function answer() {
      console.log(`You're ${name}`);
    }
    answer();
  }
  sayMyName();
  const add = (x, y) => {
    let ans = x + y;
    return ans;
  };

  useEffect(() => {
    showSlide(1);
  });
  return (
    <div className="App">
      <div class="slideshow-container">
        <div class="slideDefault fade_In_Choice flexing">
          <img
            alt="Father & Son"
            src="https://talksport.com/wp-content/uploads/sites/5/2021/05/myster.jpeg?strip=all&w=800"
          ></img>
          <p>
            <i>The 1st father and son tag team champions</i>
          </p>
        </div>
        <div class="slideDefault fade_In_Choice flexing">
          <img
            alt="Heel turn"
            src="https://www.wrestlezone.com/wp-content/uploads/sites/8/2022/09/Dominik-Mysterio-WWE-Clash-at-the-Castle-2.jpg"
          ></img>
          <p>
            <i>WHY DOMINIK WHY?</i>
          </p>
        </div>
        <div class="slideDefault fade_In_Choice flexing">
          <img
            alt="Dom joining the Judgment Day"
            src="https://lastwordonsports.com/prowrestling/wp-content/uploads/sites/15/2023/03/judgment-day-expansion.jpg"
          ></img>
          <p>
            <i>Officially joining the Judgment Day</i>
          </p>
        </div>
        <a
          class="prev"
          onClick={() => {
            plusSlide(1);
          }}
        >
          ❮
        </a>
        <a
          class="next"
          onClick={() => {
            plusSlide(-1);
          }}
        >
          ❯
        </a>
      </div>
      <div class="inclination">
        <Info></Info>
        <div
          class="toTheCenter flexing border-bruise"
          style={{ backgroundColor: "#2a87ed", opacity: 1 }}
        >
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
