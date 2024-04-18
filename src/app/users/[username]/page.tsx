import Profile from './_components/Profile';

import CompleteProfile from './_components/CompleteProfile';
import Layout, { Aside, Header, Main } from '../../../components/ui/Layout/Layout';
import style from './user.module.scss';

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
      </Main>
    </Layout>
  );
};

export default Username;
