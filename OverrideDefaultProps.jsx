const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
}
// Sets default value
Items.defaultProps = {
  quantity: 0
}

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    { /* if there was no 'quantity' listed, it would use the default value */ }
    return <Items quantity={10} />
  }
};