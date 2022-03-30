import React from "react";
import ProductSlide from "../components/ProductsSlide";
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
        modules={[Navigation, Keyboard]}
        spaceBetween={50}
        // keyboard={{ enabled: true }}
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
              const { uid, image, title, description, price } = product;
              return (
                <SwiperSlide key={uid}>
                  <ProductSlide
                    product={product}
                    key={uid}
                    id={uid}
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
