import Image from 'next/image';
import style from './profile.module.scss';

import user from '../../../../assets/user-sanjay.jpg';
import Typography from '../../../../components/ui/Typography/Typography';
import Separator from '../../../../components/ui/Separator/Separator';

interface IProfileProps {
  username: string;
  className?: string;
}

const Profile = ({ username, className }: IProfileProps) => {
  return (
    <div className={`${style['profile']} ${className}`}>
      <div className={style['profile__header']}>
        <Image src={user} alt="user" width={80} height={80} className={style['profile__avatar']} />
        <div className={style['profile__info']}>
          <Typography variant="h5">Sanjay Kumar Sah</Typography>
          <Typography variant="span">{username}</Typography>
        </div>
      </div>
      <Separator />
    </div>
  );
};

export default Profile;
