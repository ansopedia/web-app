import Image from 'next/image';
import Typography from '../../../components/ui/Typography/Typography';

import quiz from '../../../assets/icons/quiz.svg';
import certificate from '../../../assets/icons/certificate.svg';
import examMaster from '../../../assets/icons/exam-result.svg';
import backgroundWave from '../../../assets/background-wave.svg';

import style from './welcome.module.scss';
import Button from '../../../components/ui/Button/Button';

const Welcome = () => {
  return (
    <>
      <Image src={backgroundWave} alt="Quiz" className={style['background-wave']} />
      <section className={style['welcome-section']}>
        <div className={style['container']}>
          <div className={style['header']}>
            <Typography variant="h2" align="center">
              Welcome to{' '}
              <Typography variant="span" color="primary">
                Ansopedia
              </Typography>
            </Typography>
            <Typography align="center" className={style['sub-heading']}>
              Dive into a world of interactive quizzes, captivating content, and endless opportunities to expand your
              knowledge.
            </Typography>
          </div>
          <div className={style['body']}>
            <div className={style['card']}>
              <Image src={examMaster} alt="Quiz" width={64} height={64} />
              <Typography variant="h3">Exam Mastery</Typography>
              <Typography align="center">
                Unlock past exam secrets, Master your prep with years of questions & solutions
              </Typography>
            </div>
            <div className={style['card']}>
              <Image src={quiz} alt="Quiz" width={128} height={128} />
              <Typography variant="h3">Engaging Quiz</Typography>
              <Typography align="center">
                Test your knowledge and prepare for exams with our interactive quizzes.
              </Typography>
              <Button>Play Now</Button>
            </div>
            <div className={style['card']}>
              <Image src={certificate} alt="Quiz" width={64} height={64} />
              <Typography variant="h3">Global Certificate</Typography>
              <Typography align="center">
                Explore pathways to global certifications and enhance your academic portfolio
              </Typography>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Welcome;
