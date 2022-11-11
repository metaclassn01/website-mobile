import { AnimeteRoundedRect4, FollowUs, Header, SubTitle, Toast } from 'components';
import { EmailAdress } from 'constants/index';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import styles from './index.module.scss';

const ContactUs: NextPage = () => {
  const router = useRouter();

  const linkToFeedback = () => {
    // Toast('Feedback will be opened before 25th October');
    router.push('/feedback');
  };
  return (
    <div className={styles.container}>
      <Header />

      <FollowUs />

      <div className={styles.contactBox}>
        <SubTitle backgroundSize='small'>Contact Us</SubTitle>

        <div className={styles.list}>
          <p>Email Adress</p>
          <a className={styles.desc} href={`mailto:${EmailAdress}`}>
            {EmailAdress}
          </a>
        </div>
        <div className={styles.linkBtn} onClick={linkToFeedback}>
          Feedback
          <AnimeteRoundedRect4></AnimeteRoundedRect4>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;
