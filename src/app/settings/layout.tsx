import React, { FC } from 'react';

interface ISettingLayoutProps {
  children: React.ReactNode;
}

const SettingLayout: FC<ISettingLayoutProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default SettingLayout;
