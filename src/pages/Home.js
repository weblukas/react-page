import React from "react";
import ProductSlider from "../components/GallerySlider";
import { useGetStoreItemsQuery } from "../helpers/api";
import { addUID2Items } from "../helpers/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y, Mousewheel } from "swiper";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../features/cartSlice";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const prepareFetchedItems = (items) => addUID2Items(items, "normal");

const Home = () => {
  // const MemoSwiper = memo(Swiper)

  const {
    data: rawProducts,
    error,
    isLoading,
    isSuccess,
  } = useGetStoreItemsQuery();
  const products = rawProducts && prepareFetchedItems(rawProducts);
console.log(products);
const dispatch = useDispatch();
const cartItems = useSelector((state) => state.cart.cartItems);
const fetchProduct = (uid) =>
products.find((item) => item.uid === uid);
const handleAddItem = (uid) => {
    const product = fetchProduct(uid);
    
    if (cartItems.includes(product)) {
      return;
    }
    dispatch(addItem(product));
  };
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
          products &&
          products.map((product) => {
            const { uid, image, title, description, price } = product;
            return (
              <SwiperSlide key={uid}>
                <ProductSlider
                  key={uid}
                  id={uid}
                  defaultImage={image}
                  title={title}
                  description={description}
                  price={price}
                  handleAddItem={handleAddItem}
                />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default Home;
