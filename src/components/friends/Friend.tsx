import React from "react";
interface FriendProps {
  id: number;
  avatar: string;
  name: string;
  isOnline: boolean;
}
const Friend = ({ avatar, name, isOnline }: FriendProps) => {
  return (
    <li className="container border w-[300px] ml-auto mr-auto flex justify-center mb-10 shadow">
      <span className=" flex items-center mr-10 font-bold">{name}</span>
      <img src={avatar} alt="User avatar" width="48" className=" rounded" />
      <div className=" flex items-center ml-5">
        {isOnline ? (
          <div className="w-3 h-3 rounded-full bg-green-950"></div>
        ) : (
          <div className="w-3 h-3 rounded-full bg-red-950"></div>
        )}
      </div>
    </li>
  );
};

export default Friend;
