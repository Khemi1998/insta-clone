import "./UserNav.scss";
import { Link } from "react-router-dom";
import profiles from "../../data/data";

const Usernav = (props) => {
  const { toggle } = props;
  const account = profiles.map((profile, key) => {
    return (
      <div className="usernav__links" key={key}>
        <Link
          onClick={toggle}
          className="usernav__item"
          to={`/${profile.name.toLowerCase()}`}
        >
          {profile.name}
        </Link>
      </div>
    );
  });

  return (
    <div className="usernav">
      <div>{account}</div>
    </div>
  );
};

export default Usernav;
