import CartItemPanel from "../components/CartItemPanel";
import { useSelector } from "react-redux";

/**
 * 
 * [{   id: 1,
        name: 'jbl speaker',
        price: 456,
        qty: 2,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        images: ["imagess/black.png"]
        // w przypadku większej ilości elementów nie działa ,"images/green.png", "images/blue.png"
    },
    {   id: 1,
        name: 'sony speaker',
        price: 748,
        qty: 2,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image:["images/sony-blue.png"]
    },
    {   id: 3,
        name: 'sony blue',
        price: 426,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image:["images/sony-white.png"]
    },]
 */

// const removeDuplicatedEntires = displayedCartItems => {

// }

// const countOccurancies = (currentItem, allItems) => {};

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  let displayedCartItems = cartItems.reduce((accCartItem, currentCartItem) =>{
    const isHavingMultipleEntries = accCartItem.find(item => item.id === currentCartItem.id);
    
    if (!isHavingMultipleEntries) {
      return accCartItem.concat([currentCartItem]);
    } else {
      
      return accCartItem
      
    }
    
  }, [])

  // let displayedCartItems = cartItems.reduce(
  //   (accumulatedDisplayCartItems, currentItem) => {
  //     let displayedItem = {};
  //     const isHavingMultipleEntries = checkIFexistsMultipleTimes(currentItem); // add logic that tests if id exists multiple times in array
  //     if (isHavingMultipleEntries) {
  //       const qty = countOccurancies(currentItem, allItems);
  //       displayedItem = {
  //         ...currentItem,
  //         qty,
  //       };
  //     } else {
  //       displayedItem = currentItem;
  //     }

  //     return displayedItem;
  //   },
  //   {}
  // );

  // displayedCartItems = removeDuplicatedEntires(displayedCartItems);

  return (
    <>
      <h1>cart</h1>

      {cartItems.length > 0 &&
        displayedCartItems.map(({ id, name, price, images }, index) => {
          return (
            <CartItemPanel
              id={id}
              name={name}
              price={price}
              index={index}
              images={images}
            />
          );
        })}
    </>
  );
};

export default Cart;
