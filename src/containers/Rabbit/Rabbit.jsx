// import "./Rabbit.scss";
import Profile from "../../components/Profile/Profile";
import profiles from "../../data/data";

const Rabbit = () => {

const rabbitProfile = profiles.map((profile, key) => {
  if (profile.name=="Rabbit") {
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
    <div className="rabbit">
      {rabbitProfile}
    </div>
  );
};

export default Rabbit;
