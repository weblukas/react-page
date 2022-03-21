import CartItemPanel from "../components/CartItemPanel";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const total= useSelector((state) => state.cart.total);
  const nrOfItemsInCart = useSelector((state) => state.cart.nrOfItemsInCart)
  
  let displayedCartItems = cartItems.reduce((accCartItem, currentCartItem) => {
    const isHavingMultipleEntries = accCartItem.find(
      (item) => item.uid === currentCartItem.uid
    );

    if (!isHavingMultipleEntries) {
      return accCartItem.concat([currentCartItem]);
    } else {
      return accCartItem;
    }
  }, []);

  return (
    <>
      <h1>cart</h1>
      <h3>Your total is {total}</h3>
      <h3>Items in cart {nrOfItemsInCart}</h3>
      {displayedCartItems.length > 0 &&
        displayedCartItems.map(({ uid, name, price, image, defaultImage }, index) => {
          return (
            <>
              
            <CartItemPanel
              uid={uid}
              name={name}
              price={price}
              index={index}
              image={image}
              defaultImage={defaultImage}
            />

            </>
          );
        })}
    </>
  );
};

export default Cart;
