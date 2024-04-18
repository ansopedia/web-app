import style from './icon.module.scss';

const LeftArrowIcon = () => {
  return (
    <div className={style.icon}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="497.333 239.999 80.092 239.999 176.087 144.004 153.46 121.377 18.837 256 153.46 390.623 176.087 367.996 80.09 271.999 497.333 271.999 497.333 239.999"
        />
      </svg>
    </div>
  );
};

export default LeftArrowIcon;
