import Usernav from "../UserNav/UserNav";
import "./Nav.scss";

const Nav = () => {
  return (
    <div className="nav">
      <h1 className="nav__title">Instagram</h1>
      <Usernav />
    </div>
  )
}

export default Nav;
