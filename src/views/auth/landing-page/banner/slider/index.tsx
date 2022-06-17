import { SliderContainer, SliderWrapper } from './slider.styles';
import Introduction from './introduction';
import SwiperSlider from './swiper-slider';

const Slider = () => {
  return (
    <SliderContainer>
      <SliderWrapper>
        <SwiperSlider />
      </SliderWrapper>
      <Introduction />
    </SliderContainer>
  );
};

export default Slider;
