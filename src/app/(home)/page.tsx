'use client';

import { Memo, useObservable } from '@legendapp/state/react';
import { useInterval } from 'usehooks-ts';
import Hero from './_components/Hero';
import Typography from '../../components/ui/Typography/Typography';
import Welcome from './_components/Welcome';
import NavBar from './_components/NavBar';
import GlobalEducation from './_components/GlobalEducation';

export default function Home() {
  const count$ = useObservable(1);

  useInterval(() => {
    count$.set((v) => v + 1);
  }, 600);

  return (
    <>
      <NavBar />
      <Hero />
      <Welcome />
      <GlobalEducation />
      <Typography variant="h1">Hello, World!</Typography>
      <Typography variant="h1" color="default">
        Hello, World!
      </Typography>
      <Typography variant="h1" color="error">
        Hello, World!
      </Typography>
      <Typography variant="h1" color="primary">
        Hello, World!
      </Typography>
      <Typography variant="h1" color="secondary">
        Hello, World!
      </Typography>
      <main>
        Welcome to Ansopedia
        <div>
          Count: <Memo>{count$}</Memo>
        </div>
      </main>
    </>
  );
}
