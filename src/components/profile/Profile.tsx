interface UserProps {
  username: string;
  tag: string;
  location: string;
  avatar: string;
  stats: {
    followers: number;
    views: number;
    likes: number;
  };
}
const Profile = ({ username, tag, location, avatar, stats }: UserProps) => {
  return (
    <div className="container pt-3 pb-3 w-[300px] flex flex-col border items-center ml-auto mr-auto mt-10">
      <div className="flex flex-col items-center">
        <img
          src={avatar}
          alt="User avatar"
          className="w-[100px] rounded-full "
        />
        <p className="text-center">{username}</p>
        <p className="text-center">{tag}</p>
        <p className="text-center">{location}</p>
      </div>

      <ul className="flex">
        <li className="flex flex-col items-center border">
          <span className="mr-2 ml-2 mt-2 mb-2">Followers</span>
          <span className="font-bold">{stats.followers}</span>
        </li>
        <li className="flex flex-col items-center border">
          <span className="mr-2 ml-2 mt-2 mb-2">Views</span>
          <span className="font-bold">{stats.views}</span>
        </li>
        <li className="flex flex-col items-center border">
          <span className="mr-2 ml-2 mt-2 mb-2">Likes</span>
          <span className="font-bold">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
