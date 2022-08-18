import SwiperCore, { Navigation, Pagination } from 'swiper';
import {
  DriverListWrapper,
  Stick,
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
import { useTranslation } from 'react-i18next';

SwiperCore.use([Pagination, Navigation]);

const DriverList = () => {
  const { t } = useTranslation();
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
        <ViewButton>{t('SEE ALL DRIVER')}</ViewButton>
        <Stick />
      </StyledContainer>
    </>
  );
};

export default DriverList;
