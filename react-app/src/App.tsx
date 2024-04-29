import Message from "./components/Message";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import MyButton from "./components/MyButton";
import Heart from "./components/Heart";
import { useState } from "react";
import { FaAccessibleIcon } from "react-icons/fa";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";

function App() {
  const [alertVisable, setAlertVisable] = useState(false);
  const [person, setPerson] = useState({
    name: "John",
    age: 20,
    address: {
      city: "Miskolc",
      zipCode: 3402,
    },
  });
  const [tags, setTags] = useState(["happy", "cheerful"]);
  const [cartItems, setCartItems] = useState(["prod1", "prod2"]);

  let items = ["item1", "item2"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const modifyPerson = () => {
    console.log(person);
    setPerson({
      ...person,
      name: "Tom",
      age: 33,
      address: {
        ...person.address,
        city: "Budapest",
        zipCode: 1001,
      },
    });
  };

  const audTags = () => {
    //Add
    setTags([...tags, "newTag"]);

    //Delete
    setTags(tags.filter((tag) => tag !== "happy"));

    //Update
    setTags(tags.map((tag) => (tag === "happy" ? "happiness" : tag)));
  };

  const handleClicked = () => {
    console.log("clicked!");
    setAlertVisable(true);
    modifyPerson();
  };

  const handleOnClear = () => {
    setCartItems([]);
  };

  return (
    <div>
      <NavBar cartItemsCount={cartItems.length} />
      <Cart onClear={handleOnClear} cartItems={cartItems} />
      <Heart initialStatus={true} onClick={() => console.log("clicked")} />
      <Message />
      <ListGroup
        items={items}
        heading="itemHeading"
        onSelectItem={handleSelectItem}
      />
      <Alert onClose={() => setAlertVisable(false)}>
        Hello <span>Alert</span>
      </Alert>
      <MyButton handleClicked={handleClicked}>
        <FaAccessibleIcon color="green" size="70" />
      </MyButton>
      {alertVisable && (
        <Alert onClose={() => setAlertVisable(false)}>My Alert</Alert>
      )}
    </div>
  );
}

export default App;
