import React from "react";
interface FriendProps {
  id: number;
  avatar: string;
  name: string;
  isOnline: boolean;
}
const Friend = ({ avatar, name, isOnline }: FriendProps) => {
  return (
    <li>
      <span>{name}</span>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{isOnline ? "+" : "-"}</p>
    </li>
  );
};

export default Friend;
