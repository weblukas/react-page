import CartItemPanel from "../components/CartItemPanel";
import { useSelector } from "react-redux";


const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log(cartItems, "to wyświetl");
  
  // cartItems dodany produkt do koszyka, który mapuje i próbuje pokazać na ekranie

  // const [isItemInCart, setIsItemInCart] = useState(false);


 
  return (
    <>
      <h1>cart</h1>
     
        { cartItems.length > 0 && cartItems.map((item) => {
          return <CartItemPanel id={item.id} name={item.name} price={item.price}  />
         // cartItemPanel powinien pokazywać nowe dane
        })}

        
    </>
  );
};

export default Cart;
