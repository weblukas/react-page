import React from 'react'
import { useGetStoreItemsQuery } from '../helpers/api'


const Home = () => {
    const { data, error, isLoading, isSuccess, isError } = useGetStoreItemsQuery();
   console.log(data);
  
    return (
      <div>
        <h1>Home</h1>
        {isLoading && "Loading..."}
        {isError && error.message}
        {isSuccess &&
          data &&
          data.map((product, i) => <h1 key={product.id}>{product.title}</h1>)}
          
      </div>
    );
}

export default Home
