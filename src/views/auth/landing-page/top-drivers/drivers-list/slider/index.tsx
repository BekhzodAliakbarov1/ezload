import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import DriverCard from 'components/cards/driver-card';
import ProfileImg from 'assets/img/profile.png';
import { useTopDrivers } from 'server-state/queries/use-top-driver';

interface SliderProps {
  slideChangeHandle: (e: SwiperCore) => void;
}

const DriversSlider = ({ slideChangeHandle }: SliderProps) => {
  const dummyArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const { data } = useTopDrivers();
  console.log(data);

  return (
    <Swiper
      height={400}
      spaceBetween={30}
      hashNavigation={{
        watchState: true,
      }}
      pagination={{
        clickable: true,
        type: 'bullets',
        bulletElement: 'span',
        bulletActiveClass: 'timeline-icon-active',
      }}
      navigation={{
        nextEl: '.button-next',
        prevEl: '.button-prev',
      }}
      breakpoints={{
        700: {
          slidesPerView: 1,
        },
        900: {
          slidesPerView: 2,
        },
        1300: {
          slidesPerView: 4,
        },
      }}
      onSlideChange={slideChangeHandle}
      modules={[Autoplay]}
      loop
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
    >
      {dummyArray.map((value) => (
        <SwiperSlide key={value}>
          <DriverCard
            bg_color="white"
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
        </SwiperSlide>
      ))}
      {/* <SwiperSlide className="desktop" data-hash="slide1">
        <SliderWrapper>
          {dummyArray.map((value) => (
            <DriverCard
              bg_color="white"
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
          ))}
        </SliderWrapper>
      </SwiperSlide>
      <SwiperSlide className="desktop" data-hash="slide2">
        <SliderWrapper>
          {dummyArray.map((value) => {
            return (
              <DriverCard
                bg_color="white"
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
              bg_color="white"
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
      ))} */}
    </Swiper>
  );
};

export default DriversSlider;
