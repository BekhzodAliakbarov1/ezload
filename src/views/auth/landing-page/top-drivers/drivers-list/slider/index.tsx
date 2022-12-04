import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import DriverCard from 'components/cards/driver-card';
import { useTopDrivers } from 'server-state/queries/use-top-driver';

interface SliderProps {
  slideChangeHandle: (e: SwiperCore) => void;
}

const DriversSlider = ({ slideChangeHandle }: SliderProps) => {
  const { data } = useTopDrivers();

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
      {data?.pages.map((page) =>
        page.results.map((driver) => (
          <SwiperSlide key={driver.id}>
            <DriverCard
              bg_color="white"
              image={driver.profile_picture?.file}
              first_name={driver.first_name}
              id={driver.id}
              rates_avg={driver.rates_avg}
              vehicle={{
                capacity: driver.vehicle?.capacity,
                licence_plate: driver.vehicle?.licence_plate,
                title: driver.vehicle?.title,
              }}
              loads_count={driver.loads_count}
              sizes="104px"
              shadow
            />
          </SwiperSlide>
        ))
      )}
    </Swiper>
  );
};

export default DriversSlider;
