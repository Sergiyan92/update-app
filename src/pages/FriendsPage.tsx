import React from "react";
import FriendList from "../components/friends/FriendList";
import friends from "../data/friends.json";

const FriendsPage = () => {
  return <FriendList friends={friends} />;
};

export default FriendsPage;
