import "../Design/home.css";
function Info({ src, name, age, hometown, signature }) {
  return (
    <div class="toTheLeft flexing border-bruise">
      <img alt="Dominik" src={src} />

      <h1 class="brand content">{name}</h1>
      <div class="inclination">
        <div class="toTheLeft">
          <p class="personalInfo">Birth year:</p>
          <p>{age}</p>
        </div>
        <div class="toTheLeft">
          <p class="personalInfo">Hometown</p>
          <p>{hometown}</p>
        </div>
        <div class="toTheLeft">
          <p class="personalInfo">Signature</p>
          <p>{signature}</p>
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
