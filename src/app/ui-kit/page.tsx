'use client';

import { useState } from 'react';
import Checkbox from 'components/ui/Checkbox/Checkbox';

const Home = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setIsChecked(event.target.checked);
  };

  return (
    <>
      <Checkbox label="male" onChange={handleCheckboxInput} checked={isChecked} />
      <Checkbox label="female" disabled />
    </>
  );
};

export default Home;
