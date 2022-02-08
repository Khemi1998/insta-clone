// import "./Cat.scss";
import Profile from "../../components/Profile/Profile";
import profiles from "../../data/data";

const Cat = () => {

const catProfile = profiles.map((profile, key) => {
  if (profile.name=="Cat") {
    return <div key={key}>
      <Profile
      dp={profile.dp}
      Name={profile.name}
      bioTitle={profile.bio}
      description={profile.description}
      posts={profile.posts}
      followers={profile.followers}
      following={profile.following}
        />
    </div>
  }
})

  return (
    <div className="cat">
      {catProfile}
    </div>
  );
};

export default Cat;
