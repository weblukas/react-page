import { useState, useEffect } from "react";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import featuredProducts from "../data/featured-products";

export const storeItemsApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com" }),
  keepUnusedDataFor: 8000,
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
    // console.log({ isLoading, data, error, isSuccess });
    if (isSuccess && data.length > 0) {
      const fetchedDataWithType = prepData(data, "fetched");
      const featuredDataWithType = prepData(featuredProducts, "featured");
    //   console.log([...fetchedDataWithType, ...featuredDataWithType]);
      const newData = [...fetchedDataWithType, ...featuredDataWithType];
      setState({
        isLoading,
        data: newData,
        error,
        isSuccess,
      });
    }
  }, [isSuccess, data, isLoading, error]);

  return state;
};
