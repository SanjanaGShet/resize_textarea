import { forwardRef } from "react";

const Children = forwardRef((props, ref) => {
  const handleChange = (e) => {
    props.getHeight(e.target.offsetHeight);
  };
  return <textarea ref={ref} onMouseMove={handleChange} />;
});

export default Children;
