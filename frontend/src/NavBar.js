import { Link } from "react-router-dom";
import "./Formdesign.css";
const NavBar = () => {
  return (
    <>
      <Link class="link" to="/">Home</Link> &nbsp; &nbsp;
      <Link class="link" to="/searchStudent">SearchStudent</Link>
    </>
  );
};
export default NavBar;
