import React from "react";
import Button from "@material-ui/core/Button";

export default (props) => {
  const buttonStyle = {
    backgroundColor: "orange",
    color: "white",
  };

  const { value, index, selectedValue, selectedValueIndex } = props;
  return index === selectedValueIndex ? (
    <Button
      variant="contained"
      style={buttonStyle}
      onClick={() => selectedValue(value, index)}
    >
      {value}
    </Button>
  ) : (
    <Button
      variant="contained"
      color="primary"
      onClick={() => selectedValue(value, index)}
    >
      {value}
    </Button>
  );
};
