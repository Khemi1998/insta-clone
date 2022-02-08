import "./UserNav.scss";
import { Link } from "react-router-dom";

const Usernav = () => {
  return (
    <div className="usernav">
      <div className="usernav__links">
        <Link className="nav-menu__item" to="/cat">
          Cat
        </Link>
        <Link className="nav-menu__item" to="/dog">
          Dog
        </Link>
        <Link className="nav-menu__item" to="/rabbit">
          Rabbit
        </Link>
      </div>
    </div>
  );
};

export default Usernav;
