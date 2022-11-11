import { MotionOnscreen } from 'components';

import styles from './index.module.scss';

const Copyright = () => {
  return (
    <MotionOnscreen className={styles.copyright} postition='scale'>
      Copyright © 2022 Askermeta Tech Ltd.
    </MotionOnscreen>
  );
};

export default Copyright;
