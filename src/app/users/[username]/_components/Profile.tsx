import Image from 'next/image';
import style from './profile.module.scss';

import user from '../../../../assets/user-sanjay.jpg';
import Typography from '../../../../components/ui/Typography/Typography';
import Separator from '../../../../components/ui/Separator/Separator';
import EditProfileButton from './EditProfileButton';
import GenderIcon from '../../../../icons/GenderIcon';
import UniversityIcon from '../../../../icons/UniversityIcon';
import LocationPin from '../../../../icons/LocationPin';
import Card from '../../../../components/ui/Card/Card';

interface IProfileProps {
  username: string;
  className?: string;
}

const Profile = ({ username, className }: IProfileProps) => {
  return (
    <Card className={`${style['profile']} ${className}`}>
      <div className={style['profile__edit']}>
        <EditProfileButton />
      </div>
      <div className={style['profile__header']}>
        <Image src={user} alt="user" width={80} height={80} className={style['profile__avatar']} />
        <div className={style['profile__info']}>
          <Typography variant="h5">Sanjay Kumar Sah</Typography>
          <Typography variant="span">@{username}</Typography>
        </div>
      </div>
      <Separator />
      <div className={style['profile__details']}>
        <div className={style['profile__detail']}>
          <GenderIcon />
          <Typography variant="span">Male</Typography>
        </div>
        <div className={style['profile__detail']}>
          <LocationPin />
          <Typography variant="span">Ahmedabad</Typography>
        </div>
        <div className={style['profile__detail']}>
          <UniversityIcon />
          <Typography variant="span">RK University Rajkot, Gujarat</Typography>
        </div>
      </div>
    </Card>
  );
};

export default Profile;
