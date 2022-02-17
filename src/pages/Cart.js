import CartItemPanel from "../components/CartItemPanel";
import { useSelector } from "react-redux";


const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <>
      <h1>cart</h1>

      {cartItems.length > 0 &&
        cartItems.map(({ id, name, price }, index) => {
          console.log(index, id);
          return (
            <CartItemPanel id={id} name={name} price={price} index={index} />
          );
        })}
    </>
  );
};

export default Cart;