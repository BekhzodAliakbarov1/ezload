import SwiperCore, { Navigation, Pagination } from 'swiper';
import {
  DriverListWrapper,
  StyledContainer,
  ViewButton,
} from './drivers-list.styles';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useState } from 'react';
import SliderNav from './slider-nav';
import Container from 'wrappers/container/container';
import DriversSlider from './slider';
import Button from 'components/button/button';

SwiperCore.use([Pagination, Navigation]);

const DriverList = () => {
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
      <DriverListWrapper>
        <Container>
          <SliderNav
            isEnd={isDisabled.nextDisabled}
            isStart={isDisabled.prevDisabled}
            nextClass="button-next"
            prevClass="button-prev"
          />
        </Container>
      </DriverListWrapper>
      <StyledContainer>
        <DriversSlider slideChangeHandle={slideChangeHandle} />
        <ViewButton>SEE ALL DRIVERS</ViewButton>
      </StyledContainer>
    </>
  );
};

export default DriverList;
