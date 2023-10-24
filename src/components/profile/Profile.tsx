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
    <div className="container flex">
      <div className="flex flex-col">
        <img
          src={avatar}
          alt="User avatar"
          className="w-[100px] justify-center"
        />
        <p className="text-center">{username}</p>
        <p>{tag}</p>
        <p>{location}</p>
      </div>

      <ul>
        <li>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
