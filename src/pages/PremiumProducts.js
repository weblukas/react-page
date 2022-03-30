import React from "react";
import { useFetchItemsFromAllStores } from "../helpers/api";
import ProductSlider from "../components/ProductsSlide";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation, Scrollbar } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const PremiumProducts = () => {
  const { data, error, isLoading, isSuccess } = useFetchItemsFromAllStores();

  return (
    <>
      <h1>Premium store</h1>
      {isLoading && "Loading..."}
      {error && <h2>Somethig went wrong</h2>}
      <Swiper
        modules={[Navigation, Keyboard]}
        spaceBetween={50}
       
        keyboard={{ enabled: true }}
        // allowTouchMove={false}
        loop={true}
        direction={"horizontal"}
        slidesPerView={1}

        navigation
      >
        {isSuccess &&
          data &&
          data
            .filter((item) => item.type === "featured")
            .map((product) => {
              const {
                uid,
                title,
                price,
                description,
                defaultImage,
                images,
                colors,
              } = product;
              return (
                <SwiperSlide key={uid}>
                  <ProductSlider
                    product={product}
                    id={uid}
                    title={title}
                    description={description}
                    defaultImage={defaultImage}
                    images={images}
                    price={price}
                    colors={colors}
                  />
                </SwiperSlide>
              );
            })}
      </Swiper>
    </>
  );
};

export default PremiumProducts;
