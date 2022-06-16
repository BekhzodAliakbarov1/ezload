import { LeftBox, RightBox } from 'assets/svg';
import Availibility from '../availibility';
import { BackgrounImageWrapper, BannerWrapper } from './banner.styles';
import Slider from './slider';

const Banner = () => {
  return (
    <>
      <BannerWrapper>
        <h1>Header</h1>
        <Slider />
        <Availibility />
      </BannerWrapper>
    </>
  );
};

export default Banner;
