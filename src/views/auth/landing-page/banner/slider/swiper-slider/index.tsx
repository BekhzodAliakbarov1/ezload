import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import { NextButton, PrevButton, SwiperWrapper } from './swiper-slider.styles';
import NavigateRightIcon from 'components/icons/navigate-right.icon';
import { Image } from '../slider.styles';
import truckImage from 'assets/img/truck.png';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

SwiperCore.use([Pagination, Navigation]);

const SwiperSlider = () => {
  const [isDisabled, setIsDisabled] = useState({
    nextDisabled: false,
    prevDisabled: true,
  });

  const slideChangeHandle = (e: SwiperCore) => {
    setIsDisabled((state) => {
      return {
        ...state,
        nextDisabled: e.isEnd,
        prevDisabled: e.isBeginning,
      };
    });
  };

  return (
    <SwiperWrapper>
      <Swiper
        spaceBetween={30}
        navigation={{
          nextEl: '.button-next',
          prevEl: '.button-prev',
        }}
        onSlideChange={slideChangeHandle}
      >
        <SwiperSlide data-hash="slide1">
          <Image src={truckImage} alt="truck" />
        </SwiperSlide>
        <SwiperSlide data-hash="slide2">
          <Image src={truckImage} alt="truck" />
        </SwiperSlide>
        <SwiperSlide data-hash="slide3">
          <Image src={truckImage} alt="truck" />
        </SwiperSlide>
        <PrevButton disabled={isDisabled.prevDisabled} className="button-prev">
          <NavigateRightIcon />
        </PrevButton>
        <NextButton disabled={isDisabled.nextDisabled} className="button-next">
          <NavigateRightIcon />
        </NextButton>
      </Swiper>
    </SwiperWrapper>
  );
};

export default SwiperSlider;
