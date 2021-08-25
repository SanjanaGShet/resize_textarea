import { Component, createRef } from "react";
import Children from "./Children";
import "./Parent.css";

class Parent extends Component {
  constructor() {
    super();
    this.state = {
      height: 0,
    };
    this.childRef = createRef();
  }

  // Display height on initial load
  componentDidMount() {
    const { offsetHeight } = this.childRef.current;
    this.setState({ height: offsetHeight });
  }

  // update height on mouseMove
  handleHeightChange = (offsetHeight) => {
    this.setState({ height: offsetHeight });
  };

  render() {
    const { height } = this.state;
    return (
      <div>
        <Children getHeight={this.handleHeightChange} ref={this.childRef} />
        <p className={height < 100 ? "blue" : "red"}>{`Height: ${height}`}</p>
      </div>
    );
  }
}

export default Parent;
