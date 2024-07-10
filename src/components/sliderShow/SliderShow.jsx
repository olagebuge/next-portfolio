"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./sliderShow.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const SliderShow = ({ photos, titles }) => {
  return (
    <Swiper
      pagination={true}
      modules={[Pagination]}
      className={`${styles.mySwiper}`}
      spaceBetween={60}
    >
      {photos[0] !== "" &&
        photos.map((photo,index) => (
          <SwiperSlide key={photo} className={styles.swiperContainer}>
            <Link href={photo} target="_blank">              
              <Image
                src={photo}
                fill
                sizes="(max-width: 600px) 100vw, 600px"
                quality={100}
                alt="幻燈片圖片"
                className={styles.img}
              />
              <p className={styles.imgTitle}>{titles[index]}</p>
            </Link>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default SliderShow;
