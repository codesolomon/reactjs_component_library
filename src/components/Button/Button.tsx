import React from "react";

interface ButtonProps {
  label: string;
}
const button = (props: ButtonProps) => {
  return <div>{props.label}</div>;
};

export default button;
