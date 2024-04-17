import Profile from './_components/Profile';

import CompleteProfile from './_components/CompleteProfile';
import Layout, { Aside, Header, Main } from '../../../components/ui/Layout/Layout';

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
        <>
          <Profile username={params.username} />
          <CompleteProfile />
        </>
      </Aside>
      <Main>
        <CompleteProfile />
      </Main>
    </Layout>
  );
};

export default Username;
