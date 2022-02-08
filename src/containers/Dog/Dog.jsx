// import "./Dog.scss";
import Profile from "../../components/Profile/Profile";
import profiles from "../../data/data";

const Dog = () => {
  const dogProfile = profiles.map((profile, key) => {
    if (profile.name == "Dog") {
      return (
        <div key={key}>
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
      );
    }
  });

  return <div className="dog">{dogProfile}</div>;
};

export default Dog;
