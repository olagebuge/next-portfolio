"use client";

import Image from "next/image";
import styles from "./sliderShow.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const SliderShow = ({ photos}) => {
  return (
    <div className={styles.mySwiperBlock}>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className={`${styles.mySwiper}`}
        spaceBetween={60}        
      >        
        {photos[0] !== "" &&
          photos.map((photo) => (
            <SwiperSlide className={styles.swiperContainer} key={photo}>
              <Image src={photo} fill sizes="(max-width: 768px) 100vw, 600px" alt="幻燈片圖片" className={styles.img}/>
            </SwiperSlide>
          ))}
      </Swiper>      
    </div>
  );
};

export default SliderShow;
