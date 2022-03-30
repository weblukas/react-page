import React from "react";
import { useFetchItemsFromAllStores } from "../helpers/api";
import ProductSlide from "../components/ProductsSlide";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


export const Slidersettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};


const PremiumProducts = () => {
  const { data, error, isLoading, isSuccess } = useFetchItemsFromAllStores();

 

  return (
    <>
      <h1>Premium store</h1>
      {isLoading && "Loading..."}
      {error && <h2>Somethig went wrong</h2>}

      <Slider {...Slidersettings}>
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
                <ProductSlide
                  key={uid}
                  product={product}
                  id={uid}
                  title={title}
                  description={description}
                  defaultImage={defaultImage}
                  images={images}
                  price={price}
                  colors={colors}
                ></ProductSlide>
              );
            })}
      </Slider>
    </>
  );
};

export default PremiumProducts;
