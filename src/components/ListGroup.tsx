//import { MouseEvent } from "react";

import { useState } from "react";

function ListGroup() {
  let items = ["Ney York", "San francisco", "Tokyo", "London", "Paris"];
  //  let selectedIndex = 0;

  //Event handler
  // const handleClick = (event: MouseEvent) => console.log(event);

  //hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //  const [name,setName]=useState('');
  //arr[0] //variable(selectedIndex)
  //arr[1] //updater function
  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}

      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
