import Image from 'next/image';
import Button from '../../../components/ui/Button/Button';
import Typography from '../../../components/ui/Typography/Typography';
import style from './_global-education.module.scss';

import collegeStudents from '../../../assets/college-students.svg';

const GlobalEducation = () => {
  return (
    <section className={style['global-education-section']}>
      <div className={style['container']}>
        <Typography variant="h2">
          Discover Worldwide{' '}
          <Typography variant="span" color="primary">
            Education
          </Typography>
        </Typography>
        <div className={style['container--body']}>
          <div className={style['image-content']}>
            <Image src={collegeStudents} alt="College Students" />
          </div>
          <div className={style['content']}>
            <Typography>
              Dive into a vast database with in-depth details about educational boards, universities, schools, and
              colleges globally.
            </Typography>
            <Typography>
              Stay updated on admission procedures, curriculum details, and more, helping you make informed decisions
              about your academic journey.
            </Typography>
            <Button>Explore Now</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalEducation;
