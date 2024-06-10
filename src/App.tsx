//import ListGroup from "./components/ListGroup";

import Button from "./components/Button";

//import Alert from "./components/Alert";

function App() {
  // let items = ["Ney York", "San francisco", "Tokyo", "London", "Paris"];

  // const handleSelectitem = (item: string) => {
  //   console.log(item);
  // };
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
      <Button color="primary" onClick={() => console.log("clicked")}>
        My Button
      </Button>
    </div>
  );
}

export default App;
