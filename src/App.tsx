import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Ney York", "San francisco", "Tokyo", "London", "Paris"];
  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
