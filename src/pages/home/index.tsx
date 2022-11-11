import { Header } from 'components';
import { motion, useAnimationControls } from 'framer-motion';
import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';
import MainVideo from 'views/home/MainVideo';

const AnimeteSlideLine = dynamic(() => import('views/home/AnimeteSlideLine'), { ssr: false });
const Download = dynamic(() => import('views/home/Download'), { ssr: false });
const Sharer = dynamic(() => import('views/home/Sharer'), { ssr: false });
const WKTPrice = dynamic(() => import('views/home/WKTPrice'), { ssr: false });
const OurIntroduction = dynamic(() => import('views/home/OurIntroduction'), { ssr: false });
const ContactUs = dynamic(() => import('views/home/ContactUs'), { ssr: false });
const Roadmap = dynamic(() => import('views/home/Roadmap'), { ssr: false });
const OurTeam = dynamic(() => import('views/home/OurTeam'), { ssr: false });
const OurGoals = dynamic(() => import('views/home/OurGoals'), { ssr: false });
const OurSupporters = dynamic(() => import('views/home/OurSupporters'), { ssr: false });
const Copyright = dynamic(() => import('views/home/Copyright'), { ssr: false });

import styles from './index.module.scss';

// 开屏 loading 3秒
const loadingDelay = 3;

const Home = () => {
  const videoRef = useRef<any>();

  const [isLoadingAnimationComplete, setIsLoadingAnimationComplete] = useState(false);

  // 下载延迟 1s 显示
  const [downloadAnimationDelay, setDownloadAnimationDelay] = useState(loadingDelay + 1);
  // 轮播延迟 2s 显示
  const [sharerAnimationDelay, setSharerAnimationDelay] = useState(loadingDelay + 2);

  const loadingControls = useAnimationControls();

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      loadingControlsStart();
    }, loadingDelay * 1000);

    const videoPlayTimer = setTimeout(() => {
      videoRef.current.onVideoPlay?.();
    }, (loadingDelay - 1) * 1000);

    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(videoPlayTimer);
    };
  }, []);

  const loadingControlsStart = () => {
    loadingControls.start({
      opacity: 0,
      transition: {
        duration: 1,
      },
      transitionEnd: {
        display: 'none',
      },
    });
  };

  const handleLoadingAnimationComplete = () => {
    // videoRef.current.onVideoPlay?.();
    setIsLoadingAnimationComplete(true);
  };

  return (
    <div className={styles.container}>
      <motion.div
        className={styles.loading}
        animate={loadingControls}
        onAnimationComplete={handleLoadingAnimationComplete}
      >
        <div className={styles.img}></div>
        <div className={styles.namePreLoading}></div>
      </motion.div>

      {isLoadingAnimationComplete && <AnimeteSlideLine />}

      <Header className={styles.header} isShowChangeLanguageBtn={false} />

      <MainVideo ref={videoRef} />

      <Download
        transition={{ delay: downloadAnimationDelay }}
        onAnimationComplete={() => {
          setDownloadAnimationDelay(0);
        }}
      />

      <Sharer
        transition={{ delay: sharerAnimationDelay }}
        onAnimationComplete={() => {
          setSharerAnimationDelay(0);
        }}
      />

      <WKTPrice />

      <OurIntroduction />

      <OurTeam />

      <ContactUs />

      <Roadmap />

      <OurGoals />

      <Download />

      <OurSupporters />

      <Copyright />
    </div>
  );
};

export default Home;
