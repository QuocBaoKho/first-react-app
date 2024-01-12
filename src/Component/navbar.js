import "../Design/home.css";
import { Link } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { useState } from "react";
function Navbar() {
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);
  const mouseEnter = () => {
    setHover(true);
  };
  const mouseLeave = () => {
    setHover(false);
  };
  const MenuItem = ({ title }) => {
    return (
      <li
        style={{
          padding: 10,
          textAlign: "left",
          cursor: "pointer",
          // backgroundColor: hover ? "green" : "yellow",
        }}
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
      >
        {title}
      </li>
    );
  };
  return (
    <div>
      {" "}
      <div class="div1">
        <div>
          <div
            className="drop_down"
            style={{
              marginTop: 37,

              color: "#9ad9d1",
            }}
          >
            <CiMenuBurger
              size={40}
              onClick={() => {
                console.log(open);

                setOpen(!open);
                console.log(open);
              }}
              style={{ cursor: "pointer" }}
            ></CiMenuBurger>
          </div>
          <div
            className={`${open === false ? "hidden" : ""}`}
            style={{
              backgroundColor: "yellow",
              maxWidth: 270,
              position: "absolute",
              zIndex: 3,
              marginLeft: -7,
            }}
          >
            <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
              <MenuItem title="Joke on you"></MenuItem>
              <MenuItem title="I'm into that shit"></MenuItem>
            </ul>
          </div>
        </div>
        <Link to="/" style={linkStyle}>
          <h1 class="brand marginLeft">KRIS</h1>
        </Link>

        <Link to="/tian" style={linkStyle}>
          <h1 class="brand marginLeft">TIAN</h1>
        </Link>
        <Link to="/Cage" style={linkStyle}>
          <h1 class="brand marginLeft">CAGE</h1>
        </Link>
        <h1 class="brand marginLeft">BEAUTIFUL LOVE</h1>
      </div>
    </div>
  );
}

const linkStyle = { textDecoration: "none" };
const menuStyle = { margin: 20 };
export default Navbar;
