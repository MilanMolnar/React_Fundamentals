import Message from "./components/Message";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import MyButton from "./components/MyButton";
import { useState } from "react";

function App() {
  const [alertVisable, setAlertVisable] = useState(false);

  let items = ["item1", "item2", "item3", "item4", "item5", "item6", "item7"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const handleClicked = () => {
    console.log("clicked!");
    setAlertVisable(true);
  };

  return (
    <div>
      <Message />
      <ListGroup
        items={items}
        heading="itemHeading"
        onSelectItem={handleSelectItem}
      />
      <Alert onClose={() => setAlertVisable(false)}>
        Hello <span>Alert</span>
      </Alert>
      <MyButton handleClicked={handleClicked}>MyButton</MyButton>
      {alertVisable && (
        <Alert onClose={() => setAlertVisable(false)}>My Alert</Alert>
      )}
    </div>
  );
}

export default App;
