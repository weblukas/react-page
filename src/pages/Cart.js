import CartItemPanel from "../components/CartItemPanel";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  let displayedCartItems = cartItems.reduce((accCartItem, currentCartItem) => {
    const isHavingMultipleEntries = accCartItem.find(
      (item) => item.ItemId === currentCartItem.ItemId
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

      {cartItems.length > 0 &&
        displayedCartItems.map(({ ItemId, name, price, images }, index) => {
          return (
            <CartItemPanel
              ItemId={ItemId}
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
