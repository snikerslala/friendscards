import React from "react";

const Scroll = props => {
  return (
    <div
      style={{
        overflowY: "scroll",
        borderTop: "1px solid #fffceb",
        borderBottom: "1px solid #fffceb",
        height: "70vh"
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
