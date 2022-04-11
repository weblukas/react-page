import CartItemPanel from "../components/CartItemPanel";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  let total = useSelector((state) => state.cart.total);
  let nrOfItemsInCart = useSelector((state) => state.cart.nrOfItemsInCart);

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
      <h1>Your cart</h1>
      {(total > 0) ? <h2>Your total is {total} zł</h2> : <h3>Cart is empty</h3>}
     {(total > 0 )? <h3>Items in cart {nrOfItemsInCart}</h3> : null}
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
