import style from './hero.module.scss';
import NavBar from './NavBar';

const Hero = () => {
  return (
    <section className={style.hero}>
      <div className={style['hero-background']}></div>
      <NavBar />
    </section>
  );
};

export default Hero;
