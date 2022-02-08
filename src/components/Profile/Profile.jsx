import "./Profile.scss";
import verified from "../../assets/images/verified.svg";
import dots from "../../assets/images/dots.svg";

const Profile = (props) => {
  const { dp, Name, bioTitle, description, posts, followers, following } =
    props;

  return (
    <div className="profile">
      <div className="profile__head__container">
        <img className="profile__head__pic" src={dp} alt="profile" />
        <div className="profile__connect">
          <div className="profile__head">
            <h2>{Name}</h2>
            <img src={verified} alt="verified" />
            <img src={dots} alt="dots" />
          </div>
          <button className="profile__followbtn">Follow</button>
          <button className="profile__arrowbtn">˅</button>
        </div>
      </div>
      <strong className="profile__content">{bioTitle}</strong>
      <p className="profile__content">{description}</p>
      <div className="profile__info">
        <div className="profile__info__item">
          <strong>{posts}</strong>
          <p>posts</p>
        </div>
        <div className="profile__info__item">
          <strong>{followers}</strong>
          <p>followers</p>
        </div>
        <div className="profile__info__item">
          <strong>{following}</strong>
          <p>following</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
