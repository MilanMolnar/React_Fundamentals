import MyButton from "./MyButton";

interface Props {
  cartItems: string[];
  onClear: () => void;
}

const Cart = ({ cartItems, onClear }: Props) => {
  return (
    <>
      <div>Cart:</div>
      <ul>
        {cartItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <MyButton handleClicked={onClear}>Clear Cart!</MyButton>
    </>
  );
};

export default Cart;
