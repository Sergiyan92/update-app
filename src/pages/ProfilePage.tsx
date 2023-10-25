import React from "react";
import Profile from "../components/profile/Profile";
import user from "../data/user.json";

const ProfilePage = () => {
  return (
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
  );
};

export default ProfilePage;
