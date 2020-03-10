import React from "react";

export default props => {
  return (
    <div className="stack-item">
      <img src={props.image} alt="stack"></img>
      <p>{props.name}</p>
    </div>
  );
};
