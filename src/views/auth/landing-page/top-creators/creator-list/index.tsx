import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CreatorListWrapper } from './creator-list.styles';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useState } from 'react';
import SliderNav from './slider-nav';
import Container from 'wrappers/container/container';

SwiperCore.use([Pagination, Navigation]);

const CreatorList = () => {
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
    <>
      <CreatorListWrapper>
        <Container>
          <SliderNav
            isEnd={isDisabled.nextDisabled}
            isStart={isDisabled.prevDisabled}
            nextClass="button-next"
            prevClass="button-prev"
          />
        </Container>
      </CreatorListWrapper>
      <Swiper
        spaceBetween={30}
        navigation={{
          nextEl: '.button-next',
          prevEl: '.button-prev',
        }}
        onSlideChange={slideChangeHandle}
      >
        <SwiperSlide data-hash="slide1">1</SwiperSlide>
        <SwiperSlide data-hash="slide2">2 </SwiperSlide>
        <SwiperSlide data-hash="slide3">3</SwiperSlide>
      </Swiper>
    </>
  );
};

export default CreatorList;
