import { useState, useEffect } from "react";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import featuredProducts from "../data/featured-products";

export const storeItemsApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com" }),
  endpoints: (builder) => ({
    getStoreItems: builder.query({
      query: () => `products/category/electronics`,
    }),
  }),
});

export const { useGetStoreItemsQuery } = storeItemsApi;

const prepData = (data, type) =>
  data.reduce(
    (acc, current) => [
      ...acc,
      { ...current, type, uid: `${type}_${current.id}` },
    ],
    []
  );

export const useFetchItemsFromAllStores = () => {
  const [state, setState] = useState({
    data: null,
    error: null,
    isLoading: true,
    isSuccess: false,
  });
  //   const [apiStoreData, setApiStoreData] = useState(null);
  //   const [featuredStoreData, setFeaturedStoreData] = useState(null);
  //   const [combinedStoreData, setCombinedStoreData] = useState(null);

  const { isLoading, data, error, isSuccess } = useGetStoreItemsQuery();
  useEffect(() => {
    // const { isLoading, data, error, isSuccess } = apiStoreResults;
    console.log({ isLoading, data, error, isSuccess });
    if (isSuccess && data.length > 0) {
      const fetchedDataWithType = prepData(data, "fetched");
      const featuredDataWithType = prepData(featuredProducts, "featured");
      console.log([...fetchedDataWithType, ...featuredDataWithType]);
      const newData = [...fetchedDataWithType, ...featuredDataWithType];
      setState({
        isLoading,
        data: newData,
        error,
        isSuccess,
      });
    }
  }, [isSuccess, data, isLoading, error]);
  /*api {
    "id": 9,
    "title": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
    "price": 64,
    "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    "rating": { "rate": 3.3, "count": 203 }
  }*/

  /* featured
  {
    id: 1,
    title: "Jbl Flip",
    price: 456,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      defaultImage: "images/black.png",
      images: ["images/black.png", "images/green.png", "images/blue.png"],
    
  }
  */

  return state;
};
