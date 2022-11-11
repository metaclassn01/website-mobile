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
          rotate: -50,
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
          '/images/sharer/3.png',
          '/images/sharer/2.png',
          '/images/sharer/1.png',
          '/images/sharer/4.png',
          '/images/sharer/5.png',
          '/images/sharer/6.png',
          '/images/sharer/7.png',
          '/images/sharer/8.png',
          '/images/sharer/9.png',
          '/images/sharer/10.png',
          '/images/sharer/11.png',
          '/images/sharer/12.png',
          '/images/sharer/13.png',
          '/images/sharer/14.png',
          '/images/sharer/15.png',
          '/images/sharer/16.png',
          '/images/sharer/17.png',
          '/images/sharer/18.png',
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
