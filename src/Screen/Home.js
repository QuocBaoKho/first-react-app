import "../Design/home.css";
import Info from "../Component/info";
function Home() {
  return (
    <div className="App">
      <div class="inclination">
        <Info
          src="https://bloggertastic.com/wp-content/uploads/2023/11/dominik-mysterio-w1.jpg"
          name="DOMINIK MYSTERIO"
          age="1997"
          hometown="San Diego, California"
          signature="Frog Splash"
        ></Info>
        <Info
          src="https://www.wrestlezone.com/wp-content/uploads/sites/8/2024/01/cody-rhodes-6.jpeg"
          name="CODY RHODES"
          age="1985"
          hometown="Atlanta, Georgia"
          signature="Cross Rhodes"
        ></Info>
        <Info
          src="https://cdn.vox-cdn.com/thumbor/6EyPdqsQjctnxZOUElmNJfESQm4=/0x0:1200x675/1200x800/filters:focal(468x165:660x357)/cdn.vox-cdn.com/uploads/chorus_image/image/73070049/130_SD_09042018ej_2955__1ddc82597472d22aab1d129ce2603017.0.jpg"
          name="R-TRUTH"
          age="1972"
          hometown="Charlotte, North Carolina"
          signature="Little Jimmy"
        ></Info>
        <Info
          src="https://genk.mediacdn.vn/2018/11/26/john-cena-fashion-15431990207761255377744.jpg"
          name="John Cena"
          age="1977"
          hometown="West Newbury, Massachusetts"
          signature="Attitude Adjustment"
        ></Info>
      </div>
      <div></div>
    </div>
  );
}

export default Home;
