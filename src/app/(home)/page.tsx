'use client';

import Hero from './_components/Hero';
import Welcome from './_components/Welcome';
import NavBar from './_components/NavBar';
import GlobalEducation from './_components/GlobalEducation';
import Checkbox from 'components/ui/Checkbox/Checkbox';
import { useState } from 'react';

const Home = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxInput = (value: boolean) => {
    setIsChecked(value);
  };

  return (
    <>
      <NavBar />
      <Hero />
      <Checkbox label="male" handleCheckboxInput={handleCheckboxInput} checked={isChecked} />
      <Checkbox label="female" disabled />
      <Welcome />
      <GlobalEducation />
    </>
  );
};

export default Home;
