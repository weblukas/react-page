import CartItemPanel from "../components/CartItemPanel";
import { useSelector } from "react-redux";


const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <>
      <h1>cart</h1>

      {cartItems.length > 0 &&
        cartItems.map(({ id, name, price, image }, index) => {
          
          return (
            <CartItemPanel id={id} name={name} price={price} index={index} image={image}/>
          );
        })}
    </>
  );
};

export default Cart;