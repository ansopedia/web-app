'use client';

import { Memo, useObservable } from '@legendapp/state/react';

import Checkbox from '../../components/ui/Checkbox/Checkbox';
import Typography from '../../components/ui/Typography/Typography';

import style from './playground.module.scss';

const CheckboxPlayGround = () => {
  const state$ = useObservable({ checked: false });

  return (
    <section className={style['playground-section']}>
      <Typography variant="h1">Checkbox Playground</Typography>
      <Checkbox label="Male" state$={state$} />
      <Checkbox label="Female" state$={state$} disabled />
      <Typography>
        State <Memo>{() => <Typography variant="span">{'' + state$.checked.get()}</Typography>}</Memo>
      </Typography>
    </section>
  );
};

export default CheckboxPlayGround;
