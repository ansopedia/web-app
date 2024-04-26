import React, { FC } from 'react';

interface ITabContext {
  children: Array<React.ReactElement<typeof Tabs> | React.ReactElement<typeof TabPanel>>;
}

interface ITabs {
  children: React.ReactElement<typeof Tab>[];
}

interface ITab {
  label: string;
}

interface ITabPanel {
  children: string;
}

export const TabContext: FC<ITabContext> = ({ children }) => {
  return <div>{children}</div>;
};

const Tabs: FC<ITabs> = ({ children }) => {
  return <div>{children}</div>;
};

export const Tab: FC<ITab> = ({ label }) => {
  return <div>{label}</div>;
};

export const TabPanel: FC<ITabPanel> = ({ children }) => {
  return <div>{children}</div>;
};

export default Tabs;
