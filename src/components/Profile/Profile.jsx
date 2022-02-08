import "./Profile.scss";

const Profile = (props) => {
  const { dp, Name, bioTitle, description, posts, followers, following } =
    props;

  return (
    <div className="profile">
      <div className="profile__head__container">
        <img src={dp} alt="profile" />
        <div className="profile__connect">
          <div className="profile__head">
            <h2>{Name}</h2>
          </div>
        </div>
      </div>
      <strong>{bioTitle}</strong>
      <p>{description}</p>
      <div className="profile__info">
        <div className="profile__info__posts">
          <strong>{posts}</strong>
          <p>posts</p>
        </div>
        <div className="profile__info__followers">
          <strong>{followers}</strong>
          <p>followers</p>
        </div>
        <div className="profile__info__following">
          <strong>{following}</strong>
          <p>following</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
