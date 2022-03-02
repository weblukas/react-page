import React from 'react'
import { useGetStoreItemsQuery } from '../helpers/api'


const Home = () => {
    const { data, error, isLoading, isSuccess, isError } = useGetStoreItemsQuery();
   console.log(data);
  
    return (
      <div>
        <h1>Fake store items</h1>
        {isLoading && "Loading..."}
        {error && <h2>Somethig went wrong</h2>}
        {isSuccess &&
          data &&
          data.map((product, index) =>( 
            <div>
              <p key={product.id}>{product.title}</p>
              <img src={product.image} alt="" style={{width: '100px'}} />
            </div>))}
          
      </div>
    );
}

export default Home
