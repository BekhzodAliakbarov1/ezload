import { Swiper, SwiperSlide } from 'swiper/react';
import { MobileDriverCardWrapper, SliderWrapper } from '../drivers-list.styles';
import SwiperCore from 'swiper';
import DriverCard from 'components/cards/driver-card';
import ProfileImg from 'assets/img/profile.png';

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
        // bulletClass: 'timeline-icon',
        bulletActiveClass: 'timeline-icon-active',
      }}
      navigation={{
        nextEl: '.button-next',
        prevEl: '.button-prev',
      }}
      onSlideChange={slideChangeHandle}
    >
      <SwiperSlide className="desktop" data-hash="slide1">
        <SliderWrapper>
          {dummyArray.map((value) => {
            return (
              <DriverCard
                key={value}
                image={ProfileImg}
                first_name="Antonio Fred."
                id={3}
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
      <SwiperSlide className="desktop" data-hash="slide2">
        <SliderWrapper>
          {dummyArray.map((value) => {
            return (
              <DriverCard
                styles={{ marginBottom: '40px' }}
                key={value}
                image={ProfileImg}
                first_name="Antonio Fred."
                id={3}
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
      {dummyArray.map((value) => (
        <SwiperSlide className="mobile" key={value}>
          <MobileDriverCardWrapper>
            <DriverCard
              key={value}
              image={ProfileImg}
              first_name="Antonio Fred."
              id={3}
              rates_avg={3}
              vehicle={{
                capacity: '30',
                licence_plate: '01A777AB',
                title: 'MAN',
              }}
              sizes="104px"
              shadow
            />
          </MobileDriverCardWrapper>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default DriversSlider;
