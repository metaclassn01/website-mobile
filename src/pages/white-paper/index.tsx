import { Header } from 'components';
import { useRouter } from 'next/router';

import styles from './index.module.scss';

const WhitePaper = () => {
  const router = useRouter();

  const isShowHeader = router?.query?.isShowHeader !== 'false';

  return (
    <div className={styles.container}>
      {isShowHeader && <Header />}

      {[
        '/images/white-paper/1.png',
        '/images/white-paper/2.png',
        '/images/white-paper/3.png',
        '/images/white-paper/4.png',
        '/images/white-paper/5.png',
        '/images/white-paper/6.png',
        '/images/white-paper/7.png',
        '/images/white-paper/8.png',
        '/images/white-paper/9.png',
        '/images/white-paper/10.png',
        '/images/white-paper/11.png',
        '/images/white-paper/12.png',
        '/images/white-paper/13.png',
        '/images/white-paper/14.png',
      ].map((item, index) => {
        return <img key={String(index)} className={styles.img} src={item} alt='' />;
      })}
    </div>
  );
};

export default WhitePaper;
