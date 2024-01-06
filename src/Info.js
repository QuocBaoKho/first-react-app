import logo from "./logo.svg";
import "./App.css";
function Info() {
  return (
    <div class="toTheLeft flexing">
      <img src="https://bloggertastic.com/wp-content/uploads/2023/11/dominik-mysterio-w1.jpg" />

      <h1 class="brand content">DOMINIK MYSTERIO</h1>
      <div class="inclination">
        <div class="toTheLeft">
          <p class="personalInfo">Age</p>
          <p>27</p>
        </div>
        <div class="toTheLeft">
          <p class="personalInfo">Hometown</p>
          <p>San Diego, CA</p>
        </div>
        <div class="toTheLeft">
          <p class="personalInfo">Signature</p>
          <p>Frog Splash</p>
        </div>
      </div>
      <p class="content">
        <i>
          This guy is a living testament to the North American Dream, and let me
          tell you, he's earned every ounce of celebration. Imagine enduring
          abuse from a deadbeat dad and then getting slapped with a prison
          sentence for a crime he didn't even commit. But guess what? This dude
          defied the odds, broke free from those chains, and now he stands tall
          as a champion. He's not just a free man; he's the embodiment of
          resilience and triumph. Cheers to this North American Dreamer who
          turned adversity into a victory march.
        </i>
        - Chazzy Pete when asked about Dominik
      </p>
      <p>I want to know what love is, why don't you show me?</p>
    </div>
  );
}
export default Info;
