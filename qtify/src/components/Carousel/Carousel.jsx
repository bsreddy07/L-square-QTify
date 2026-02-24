import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

SwiperCore.use([Navigation]);

function Carousel({ data, renderCard }) {
  return (
    <Swiper
      navigation
      spaceBetween={20}
      breakpoints={{
        320: { slidesPerView: 2 },
        640: { slidesPerView: 3 },
        1024: { slidesPerView: 5 },
        1440: { slidesPerView: 6 },
      }}
    >
      {data.map((item) => (
        <SwiperSlide key={item.id}>
          {renderCard(item)}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;