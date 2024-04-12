'use client';

import { useObservable } from '@legendapp/state/react';
import Checkbox from '../../ui/Checkbox/Checkbox';

const RememberMe = () => {
  const state$ = useObservable({ checked: false });

  return <Checkbox label="Remember me" state$={state$} />;
};

export default RememberMe;
