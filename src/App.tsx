//import ListGroup from "./components/ListGroup";

import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

//import Alert from "./components/Alert";

function App() {
  // let items = ["Ney York", "San francisco", "Tokyo", "London", "Paris"];

  // const handleSelectitem = (item: string) => {
  //   console.log(item);
  // };
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    // <div>
    //   <ListGroup
    //     items={items}
    //     heading="Cities"
    //     onSelectItem={handleSelectitem}
    //   />
    // </div>
    <div>
      {/* <Alert>
        Hello <span>World</span>
      </Alert> */}
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisibility(true)}>
        My Button
      </Button>
    </div>
  );
}

export default App;
