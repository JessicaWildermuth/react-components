// TODO
var GroceryList = () => {
  return (
  <div>
    <h1>My Grocery List</h1>
    <ul>
      <Wine />
      <BubbleBath />
      <Cheese />
    </ul>
  </div>
  );
}

var Wine = () => {
  return (
    <li>Wine</li>
  );
}

var BubbleBath = () => {
  return (
    <li>Bubble Bath</li>
  );
}
var Cheese = () => {
  return (
  <li>Cheese</li>
  );
}

ReactDOM.render(<GroceryList />, document.getElementById("app"));

