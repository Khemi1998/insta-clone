import "./UserNav.scss";
import { Link } from "react-router-dom";

const Usernav = () => {
  return (
    <div className="usernav">
      <div className="usernav__links">
        <Link className="usernav__item" to="/cat">
          Cat
        </Link>
        <Link className="usernav__item" to="/dog">
          Dog
        </Link>
        <Link className="usernav__item" to="/rabbit">
          Rabbit
        </Link>
      </div>
    </div>
  );
};

export default Usernav;
