import React from "react";
import ProductSlider from "../components/ProductsSlider";
import { useFetchItemsFromAllStores } from "../helpers/api";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y, Mousewheel, Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Store = () => {
  const { data, error, isLoading, isSuccess } = useFetchItemsFromAllStores();

  return (
    <div>
      <h1>Fake store items</h1>
      {isLoading && "Loading..."}
      {error && <h2>Somethig went wrong</h2>}

      <Swiper
        modules={[Navigation, Scrollbar, A11y, Mousewheel, Keyboard]}
        spaceBetween={30}
        keyboard={{ enabled: true }}
        mousewheel={false}
        loop={true}
        direction={"horizontal"}
        slidesPerView={1}
        navigation={true}
      >
        {isSuccess &&
          data &&
          data
            .filter((item) => item.type === "fetched")
            .map((product) => {
              const { id, image, title, description, price } = product;
              return (
                <SwiperSlide key={id}>
                  <ProductSlider
                    product={product}
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

export default Store;
