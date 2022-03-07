import React from "react";
import GallerySlider from "../components/GallerySlider";
import { useGetStoreItemsQuery } from "../helpers/api";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y, Mousewheel } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Home = () => {
  const { data, error, isLoading, isSuccess} =
    useGetStoreItemsQuery();
  console.log(data);

  return (
    <div>
      <h1>Fake store items</h1>
      {isLoading && "Loading..."}
      {error && <h2>Somethig went wrong</h2>}
      
      <Swiper
              modules={[Navigation, Scrollbar, A11y, Mousewheel]}
              spaceBetween={30}
              mousewheel={true}
              loop={true}
              direction={"horizontal"}
              slidesPerView={1}
              navigation={true}
            >
      {isSuccess &&
        data &&
        data.map((product) => {
          const { id, image, title, description, price } = product;
          return (
          
              <SwiperSlide key={id}>
                <GallerySlider
                  key={id}
                  id={id}
                  defaultImage={image}
                  title={title}
                  description={description}
                  price={price}
                />
              </SwiperSlide>
            
          );
        })}
        </Swiper>
    </div>
  );
};

export default Home;
