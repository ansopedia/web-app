import style from './icon.module.scss';

const EditIcon = () => {
  return (
    <div className={style.icon}>
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
        <g
          fill="none"
          fillRule="evenodd"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        >
          <path
            d="M11.492 2.789H7.753c-3.075 0-5.003 2.177-5.003 5.259v8.314c0 3.082 1.92 5.259 5.003 5.259h8.824c3.085 0 5.004-2.177 5.004-5.259v-4.028"
            stroke="currentColor"
            fill="none"
          ></path>
          <path
            d="M8.828 10.92 16.3 3.449c.93-.93 2.44-.93 3.37 0l1.218 1.217a2.383 2.383 0 0 1 0 3.37l-7.51 7.51a2.17 2.17 0 0 1-1.534.636H8.099l.094-3.78a2.17 2.17 0 0 1 .635-1.48ZM15.165 4.603l4.566 4.565"
            stroke="currentColor"
            fill="none"
          ></path>
        </g>
      </svg>
    </div>
  );
};

export default EditIcon;
