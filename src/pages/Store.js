import React from "react";
import ProductSlide from "../components/ProductsSlide";
import { useFetchItemsFromAllStores } from "../helpers/api";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Slidersettings } from "./PremiumProducts"

const Store = () => {
  const { data, error, isLoading, isSuccess } = useFetchItemsFromAllStores();

  return (
    <>
      <h1>Dev Store</h1>
      {isLoading && "Loading..."}
      {error && <p>Somethig went wrong</p>}

      <Slider {...Slidersettings}>
        {isSuccess &&
          data &&
          data
            .filter((item) => item.type === "fetched")
            .map((product) => {
              const { uid, image, title, description, price } = product;
              return (
                <ProductSlide
                  key={uid}
                  product={product}
                  id={uid}
                  defaultImage={image}
                  title={title}
                  description={description}
                  price={price}
                ></ProductSlide>
              );
            })}
      </Slider>
    </>
  );
};

export default Store;
