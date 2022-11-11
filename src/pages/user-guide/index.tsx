import { Header, UserGuide } from 'components';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import styles from './index.module.scss';

const UserGuidePage: NextPage = () => {
  const router = useRouter();

  const isShowHeader = router?.query?.isShowHeader !== 'false';

  return (
    <div className={styles.container}>
      {isShowHeader && <Header />}
      <UserGuide />
    </div>
  );
};

export default UserGuidePage;
