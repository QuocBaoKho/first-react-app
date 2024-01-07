import "../Design/home.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div class="div1">
      <Link to="/" style={linkStyle}>
        <h1 class="brand marginLeft">KRIS</h1>
      </Link>

      <Link to="/tian" style={linkStyle}>
        <h1 class="brand marginLeft">TIAN</h1>
      </Link>

      <h1 class="brand marginLeft">CAGE</h1>
      <h1 class="brand marginLeft">BEAUTIFUL LOVE</h1>
    </div>
  );
}
const linkStyle = { textDecoration: "none" };
export default Navbar;
