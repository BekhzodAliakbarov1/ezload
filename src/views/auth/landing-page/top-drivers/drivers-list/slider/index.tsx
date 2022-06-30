import { Swiper, SwiperSlide } from 'swiper/react';
import { SliderWrapper } from '../drivers-list.styles';
import SwiperCore from 'swiper';
import DriverCard from 'components/cards/driver-card';
import { ProfileImg } from 'assets/svg';

interface SliderProps {
  slideChangeHandle: (e: SwiperCore) => void;
}

const DriversSlider = ({ slideChangeHandle }: SliderProps) => {
  const dummyArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <Swiper
      spaceBetween={30}
      hashNavigation={{
        watchState: true,
      }}
      pagination={{
        clickable: true,
        type: 'bullets',
        bulletElement: 'span',
        bulletClass: 'timeline-icon',
        bulletActiveClass: 'timeline-icon-active',
        renderBullet: function (index: number, className: string) {
          return `<span class="${className}">${'.'}</span>`;
        },
      }}
      navigation={{
        nextEl: '.button-next',
        prevEl: '.button-prev',
      }}
      onSlideChange={slideChangeHandle}
    >
      <SwiperSlide data-hash="slide1">
        <SliderWrapper>
          {dummyArray.map((value) => {
            return (
              <DriverCard
                styles={{ marginBottom: '40px' }}
                key={value}
                image={ProfileImg}
                first_name="Antonio Fred."
                id={3}
                last_name=""
                rates_avg={3}
                vehicle={{
                  capacity: '30',
                  licence_plate: '01A777AB',
                  title: 'MAN',
                }}
                sizes="104px"
                shadow
              />
            );
          })}
        </SliderWrapper>
      </SwiperSlide>
      <SwiperSlide data-hash="slide2">
        <SliderWrapper>
          {dummyArray.map((value) => {
            return (
              <DriverCard
                styles={{ marginBottom: '40px' }}
                key={value}
                image={ProfileImg}
                first_name="Antonio Fred."
                id={3}
                last_name=""
                rates_avg={3}
                vehicle={{
                  capacity: '30',
                  licence_plate: '01A777AB',
                  title: 'MAN',
                }}
                sizes="104px"
                shadow
              />
            );
          })}
        </SliderWrapper>
      </SwiperSlide>
    </Swiper>
  );
};

export default DriversSlider;
