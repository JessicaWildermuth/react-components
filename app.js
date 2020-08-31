// TODO
var App = () => {
  return (
  <div>
    <h1>My Grocery List</h1>
    <GroceryList groceryitems={['Wine', 'Bubble Bath', 'Cheese']} />
  </div>
  )
}
var GroceryList = (props) => {
  return (
    <ul>
      <li>{props.groceryitems[0]}</li>
      <li>{props.groceryitems[1]}</li>
      <li>{props.groceryitems[2]}</li>
    </ul>

  );
}

// var Wine = () => {
//   return (
//     <li>Wine</li>
//   );
// }

// var BubbleBath = () => {
//   return (
//     <li>Bubble Bath</li>
//   );
// }
// var Cheese = () => {
//   return (
//   <li>Cheese</li>
//   );
// }

ReactDOM.render(<App />, document.getElementById("app"));

