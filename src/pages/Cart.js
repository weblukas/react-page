import CartItemPanel from "../components/CartItemPanel";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const total = useSelector((state) => state.cart.total);
  const nrOfItemsInCart = useSelector((state) => state.cart.nrOfItemsInCart);

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
      {total ? <h3>Your total is {total}</h3> : <h3>Your cart is empty</h3>}
     {total? <h3>Items in cart {nrOfItemsInCart}</h3> : null}
      {displayedCartItems.length > 0 &&
        displayedCartItems.map(
          (cartItem, index) => {
            const { uid, title, price, image, defaultImage } = cartItem;
            return (
              <CartItemPanel
                cartItem={cartItem}
                key={uid}
                uid={uid}
                title={title}
                price={price}
                index={index}
                image={image}
                defaultImage={defaultImage}
              />
            );
          }
        )}
    </>
  );
};

export default Cart;
