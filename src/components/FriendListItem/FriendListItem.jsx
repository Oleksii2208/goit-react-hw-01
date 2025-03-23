import s from "./FriendListItem.module.css";
import clsx from "clsx";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <img className={s.friendsImg} src={avatar} alt="Avatar" width="48" />
      <p className={s.friendsName}>{name}</p>
      {isOnline ? (
        <p className={clsx(s.status, s.green)}>Online</p>
      ) : (
        <p className={clsx(s.status, s.red)}>Offline</p>
      )}
    </div>
  );
};

export default FriendListItem;
