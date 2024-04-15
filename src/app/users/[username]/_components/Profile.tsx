import style from './profile.module.scss';

interface IProfileProps {
  username: string;
}

const Profile = ({ username }: IProfileProps) => {
  return <div className={style['profile-section']}>profile {username}</div>;
};

export default Profile;
