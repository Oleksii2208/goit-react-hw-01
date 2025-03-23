import clsx from "clsx";
import s from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={s.profile}>
      <div className={s.profileAvatar}>
        <img className={s.profileImg} src={image} alt="User avatar" />
        <p className={s.profileName}>{name}</p>
        <p className={s.profileTag}>@{tag}</p>
        <p className={s.profileLocation}>{location}</p>
      </div>

      <ul className={s.profileList}>
        <li className={s.profileItem}>
          <span>Followers</span>
          <span className={s.span}>{stats.followers}</span>
        </li>
        <li className={s.profileItem}>
          <span>Views</span>
          <span className={s.span}>{stats.views}</span>
        </li>
        <li className={s.profileItem}>
          <span>Likes</span>
          <span className={s.span}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
