import React from "react";
import Friend from "./Friend";

interface FriendProps {
  id: number;
  avatar: string;
  name: string;
  isOnline: boolean;
}
interface FriendsListProps {
  friends: FriendProps[];
}
const FriendList: React.FC<FriendsListProps> = ({ friends }) => {
  return (
    <ul className="container flex flex-col mt-10">
      {friends.map((friend) => (
        <Friend key={friend.id} {...friend} />
      ))}
    </ul>
  );
};

export default FriendList;
