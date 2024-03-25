'use client';

import { Memo, useObservable } from '@legendapp/state/react';
import { useInterval } from 'usehooks-ts';

export default function Home() {
  const count$ = useObservable(1);

  useInterval(() => {
    count$.set((v) => v + 1);
  }, 600);

  return (
    <main>
      Welcome to Ansopedia
      <div>
        Count: <Memo>{count$}</Memo>
      </div>
    </main>
  );
}
