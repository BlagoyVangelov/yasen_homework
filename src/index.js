import React from "react";
import { render } from "react-dom";

class App extends React.Component {
  state = {
    foo: 3,
    bar: 10
  };
  constructor(props){
    super(props);
    this.doStuff = this.doStuff.bind(this);
  }

  doStuff = () => {
    this.setState({ foo: this.state.foo + 1 });
    if (this.state.foo > 6) {
      this.setState({ bar: 20 });
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.doStuff}>Increment foo</button>
        <p>Foo = {this.state.foo}</p>
        <p>Bar = {this.state.bar}</p>
        <b>Bar should become 20 if Foo > 6</b>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
