// TODO
class GrocertListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      opacity: 1
    };
  }

  mouseEnter() {
    this.setState({
      fontWeight: 'bold'
    });
  }

  mouseLeave() {
    this.setState({
      fontWeight: 'normal'
    });
  }

  render() {
    var style = {
      fontWeight: this.state.fontWeight
    };
    return (
      <li style={style} onMouseEnter={this.mouseEnter.bind(this)}
      onMouseLeave={this.mouseLeave.bind(this)}>{this.props.item}</li>
    );
  }
}
var App = () => (
  <div>
    <h1>My Grocery List</h1>
    <GroceryList items={['Wine', 'Bubble Bath', 'Cheese', 'Chocolate']} />
  </div>
);

var GroceryList = (props) => (
  <ul>
    {props.items.map(item =>
    <GrocertListItem item={item} />
    )}
  </ul>

);


ReactDOM.render(<App />, document.getElementById("app"));

