import React, { useEffect, useState, createContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Button from "../components/Button";
import Image from "../components/Image";
import Input from "../components/Input";
import { addItem } from "../features/cartSlice";
import storeItems from "../helpers/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y, Mousewheel } from "swiper";

import GalleryContext from "../app/galleryContex";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const StyledDescriptionPanel = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #c4d2d6;
  color: #000;
  font-size: 1.3rem;
  width: 550px;
  height: 590px;
  margin-top: 20px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  box-shadow: 0 5px 40px #c4d2d6;

  .btn-container {
    padding: 2rem;
  }
`;

const StyledGallery = styled.section`
  margin-top: 5rem;
  display: grid;
  align-items: center;
  justify-items: center;

  .flex-container {
    display: flex;
    position: relative;

    @media screen and (max-width: 1550px ) {
      width: 800px;
    }

    @media screen and (max-width: 1150px ) {
      width: 600px;
    }
  }

  .img-container {
    width: 400px;
    height: 630px;
    background-color: #d9d9d9;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    box-shadow: 5px 5px 40px #c4d2d6;
  }
`;

const StyledRadioContainer = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 2rem;
`;

const Gallery = () => {
  const [radioValue, setRadio] = useState("black");
  const [img, setImg] = useState(0);
  const [isSelected, setIsSelected] = useState(false);
  // const [newItem, setNewItem] = useState({id:0, name:'', price: 0, description: '', image: ''})
  // const isSelected = (radioValue) => true;

  // setting image according to checked radioValue btn
  useEffect(() => {
    setImg(radioValue);

    // if (radioValue === "red") {
    //   setImg("images/red.png")... possible approach
  }, [radioValue]);
  // wrzucasz radioValue jako dependecy bo odpalasz to kiedy się zmienia radioValue
  // function setImgSource(){
    
  // }




  
  const handleChange = (e) => {
    console.log('klikkkkkkk');
    setRadio(e.target.value);
    setIsSelected(true);
    // dodaj klasę z animacją w momencie handle change
  };

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const fetchProduct = (id) => storeItems.find((item) => item.id === id);
  // fetchProduct zmienna przechowująca produkt spełniający warunki funkcji

  const handleAddItem = (id) => {
    const product = fetchProduct(id);

    if (cartItems.includes(product)) {
      return;
    }

    dispatch(addItem(product));
  };

  // const getImagePath = (radioValue) => `images/${radioValue}.png`;
  // ścieżka w przypadku pobierania z publick folder
  
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
        {storeItems.map(({ id, name, price, description, images }) => {
          // image.map() renderuj inputy na podstawie images jeśli jest
          // jest kilka kolorów renderujesz inputy
          //   <GalleryContext.Provider value={{handleAddItem, id}}> coś nie działa 
          return (
            <SwiperSlide key={id}>
            

      
              <StyledGallery>
                <div className="flex-container">
                  <div className="img-container">
                    <Image
                      src={images[0]}
                      
                      isSelected={isSelected}
                      className={` gallery-img ${isSelected && "fade-in"}`}
                    />

                    <StyledRadioContainer>
                      {images.map((image, index) => {
                        return (
                          <Input
                            type="radio"
                            name="color"
                            value={index}
                            // poprzez value możemy się dostać do każdego z images
                            defaultChecked="true"
                            // checked={isSelected("black")}
                            onChange={()=>console.log('nowy klik')}
                            onClick={handleChange}
                          />
                        );
                      })}
                    </StyledRadioContainer>
                  </div>
                  <StyledDescriptionPanel>
                    <h1>{name}</h1>
                    <div className="btn-container">
                      <Button handleAddItem={handleAddItem} productId={id} />
                      {/* czy lepiej onClick={handleAddItem} */}
                      <span>Jbl Flip 6 {radioValue} color</span>
                      <h3>{price} zł</h3>
                      <p>{description}</p>
                    </div>
                  </StyledDescriptionPanel>
                </div>
              </StyledGallery>
              
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Gallery;
