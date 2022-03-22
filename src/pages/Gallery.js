import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, updateCartQuantity } from "../features/cartSlice";
import rawFeaturedProducts from "../data/featured-products";
import { addUID2Items } from "../helpers/data";
import ProductSlider from "../components/ProductsSlider";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation, Scrollbar } from "swiper";



// import GalleryContext from "../app/galleryContex";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import "swiper/css/scrollbar";

const prepareFeaturedItems = (items) => addUID2Items(items, "featured");

const Gallery = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const featuredProducts =
    rawFeaturedProducts && prepareFeaturedItems(rawFeaturedProducts);

  const fetchProduct = (uid) =>
    featuredProducts.find((item) => item.uid === uid);
  // fetchProduct zmienna przechowująca produkt spełniający warunki funkcji
 
  const handleAddItem = (uid) => {
    const product = fetchProduct(uid);

    if (cartItems.includes(product)) {
      return;
    }
    dispatch(addItem(product));
    dispatch(updateCartQuantity())
  };

  return (
    <>
      <Swiper
        modules={[Navigation, Scrollbar, Keyboard]}
        spaceBetween={30}
        mousewheel={false}
        keyboard={{ enabled: true }}
        loop={true}
        direction={"horizontal"}
        slidesPerView={1}
        navigation={true}
      >
        {featuredProducts.map(
          ({ uid, title, price, description, defaultImage, images }) => {
            // image.map() renderuj inputy na podstawie images jeśli jest
            // jest kilka kolorów renderujesz inputy
            return (
              <SwiperSlide key={uid}>
                <ProductSlider
                  id={uid}
                  title={title}
                  description={description}
                  defaultImage={defaultImage}
                  images={images}
                  price={price}
                  handleAddItem={handleAddItem}
                />
              </SwiperSlide>
            );
          }
        )}
      </Swiper>
    </>
  );
};

export default Gallery;
