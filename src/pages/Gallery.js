import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../features/cartSlice";
import storeItems from "../helpers/data";
import GallerySlider from "../components/GallerySlider";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y, Mousewheel } from "swiper";

// import GalleryContext from "../app/galleryContex";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";


const Gallery = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const fetchProduct = (ItemId) => storeItems.find((item) => item.ItemId === ItemId);
  // fetchProduct zmienna przechowująca produkt spełniający warunki funkcji

  const handleAddItem = (ItemId) => {
    const product = fetchProduct(ItemId);

    if (cartItems.includes(product)) {
      return;
    }
    dispatch(addItem(product));
  };

  return (
    <>
      <Swiper
        modules={[Navigation, Scrollbar, A11y, Mousewheel]}
        spaceBetween={30}
        mousewheel={true}
        loop={true}
        direction={"horizontal"}
        slidesPerView={1}
        navigation={true}
      >
        {storeItems.map(({ ItemId, title, price, description, defaultImage, images }) => {
          // image.map() renderuj inputy na podstawie images jeśli jest
          // jest kilka kolorów renderujesz inputy
          return (
            <SwiperSlide key={ItemId}>
              <GallerySlider
                ItemId={ItemId}
                title={title}
                description={description}
                defaultImage={defaultImage}
                images={images}
                price={price}
                handleAddItem={handleAddItem}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Gallery;
