//import ListGroup from "./components/ListGroup";

import Alert from "./components/Alert";

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
      <Alert>
        Hello <span>World</span>
      </Alert>
    </div>
  );
}

export default App;
