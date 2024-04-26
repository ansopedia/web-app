import Profile from './_components/Profile';

import CompleteProfile from './_components/CompleteProfile';
import Layout, { Aside, Header, Main } from '../../../components/ui/Layout/Layout';
import style from './user.module.scss';
import Tabs, { Tab, TabContext, TabPanel } from '../../../components/ui/Tabs/Tabs';

interface IParams {
  username: string;
}

const Username = ({ params }: { params: IParams }) => {
  return (
    <Layout>
      <Header>
        <div>header</div>
      </Header>
      <Aside>
        <div className={style['user-aside']}>
          <Profile username={params.username} />
          <CompleteProfile />
        </div>
      </Aside>
      <Main>
        <CompleteProfile />
        <TabContext>
          <Tabs>
            <Tab label="Tab 1" />
            <Tab label="Tab 2" />
          </Tabs>
          <TabPanel>Tab 1 content</TabPanel>
          <TabPanel>Tab 2 content</TabPanel>
        </TabContext>
      </Main>
    </Layout>
  );
};

export default Username;
