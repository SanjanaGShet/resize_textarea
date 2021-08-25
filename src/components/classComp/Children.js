import { Component, forwardRef } from "react";

class Textarea extends Component {
  handleChange = (e) => {
    this.props.getHeight(e.target.offsetHeight);
  };
  render() {
    return <textarea onMouseMove={this.handleChange} ref={this.props.myRef} />;
  }
}

export default forwardRef((props, ref) => <Textarea {...props} myRef={ref} />);
