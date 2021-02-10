import React from "react";

export default () => {
  const style = {
    textAlign: "center",
    backgroundColor: "black",
    color: "white",
    width: "100%",
    paddingTop: 15,
    paddingBottom: 15
  };
  return (
    <h2 className="header" style={style}>
      SpaceX Launch Program
    </h2>
  );
};
