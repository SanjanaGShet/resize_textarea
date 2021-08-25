import { useState, useEffect, useRef } from "react";
import Children from "./Children";

const Parent = () => {
  const [height, setHeight] = useState("");
  const childRef = useRef(null);

  // Display height on initial load
  useEffect(() => {
    setHeight(childRef.current.offsetHeight);
  }, []);

  // update height on mouseMove
  const handleHeightChange = (offsetHeight) => {
    setHeight(offsetHeight);
  };
  return (
    <div>
      <Children getHeight={handleHeightChange} ref={childRef} />
      <p>{`Height: ${height}`}</p>
    </div>
  );
};

export default Parent;
