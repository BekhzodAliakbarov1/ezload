import Availibility from '../availibility';
import { BannerWrapper } from './banner.styles';
import Slider from './slider';

const Banner = () => {
  return (
    <>
      <BannerWrapper>
        <Slider />
        <Availibility />
      </BannerWrapper>
    </>
  );
};

export default Banner;
