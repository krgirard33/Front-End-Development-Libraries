// render by id
const JSX1 = (
  <div id='challenge-node'>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
//added a className
const JSX2 = (
  <div className="myDiv">
    <h1>Add a class to this div</h1>
  </div>
);

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="challenge-node">
        <h1>Types of Food:</h1>
        {/* Change code below this line */}
          <Fruits />
          <Vegetables />
        {/* Change code above this line */}
      </div>
    );
  }
};
// Add your code below this line

// render by id
ReactDOM.render(JSX1, document.getElementById('challenge-node'));

ReactDOM.render(<TypesOfFood />, document.getElementById('challenge-node'));