import '../styles/globals.css';

import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import type { AppProps } from 'next/app';
import { NextSeo } from 'next-seo';
import { GoogleAnalytics } from "nextjs-google-analytics";
import { Provider } from 'react-redux';
import { store } from 'reduxStore';

dayjs.extend(utc);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <NextSeo
        title='Metaclassn - Turn Knowledge into Wealth'
        description="Metaclassn is the world's leading, new generational, Web3 knowledge-sharing and socializing platform on Metaverse. Everyone can earn a hefty monetary return on the platform by sharing knowledge and video interaction. 
        Metaclassn is a genuine Web3 tool for performing/attending classes, WKT(World Knowledge Token ) is the only official token issued by Metaclassn.Regardless of your background, whether you are a teacher, student, parent, doctor, lawyer, trainer, scientist, engineer, artist, farmer, politician, investor, or entrepreneur, everyone can perform/attend classes on Metaclassn, learn and share knowledge and earn hefty WKT rewards.
        Metaclassn aims to establish the world's largest decentralized knowledge-sharing platform, which enables users to turn knowledge into wealth, change the civilization interchange approach by technologies, and ultimately liberate educators worldwide.
        Metaclassn upholds the belief in creating value to become a long-lasting Web3 project.  The platform strives to cultivate 100 thousand millionaires in 3 years while bringing 1000times of return for users through its novel business model and tokenomics."
        additionalMetaTags={[
          {
            name: 'keywords',
            content:
              'Metaverse,web3,share knowledge,education,class to earn,video interaction,cryptocurrency,socializing',
          },
          {
            name: 'viewport',
            content:
              'width=device-width,user-scalable=no,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0',
          },
        ]}
      />
      <GoogleAnalytics trackPageViews gaMeasurementId='G-3PX7EFD7QT' />

      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
