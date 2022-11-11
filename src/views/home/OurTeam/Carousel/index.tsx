import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import { Autoplay, EffectCoverflow, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './index.module.scss';

const Carousel = () => {
  return (
    <div className={styles.container}>
      <Swiper
        className={styles.content}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 50,
          depth: 100,
          modifier: 1,
          slideShadows: false,
          scale: 0.6,
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        loop
        speed={5000}
        autoplay={{
          delay: 0,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
      >
        {[
          '/images/our-team/1.png',
          '/images/our-team/2.png',
          '/images/our-team/3.png',
          '/images/our-team/4.png',
        ].map((item, index) => {
          return (
            <SwiperSlide key={String(index)}>
              <img src={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className={styles.mask}></div>
    </div>
  );
};
export default Carousel;
