import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Ney York", "San francisco", "Tokyo", "London", "Paris"];

  const handleSelectitem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectitem}
      />
    </div>
  );
}

export default App;
