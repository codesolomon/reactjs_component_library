import React from "react";
import "./Button.css";

interface ButtonProps {
  label: string;
}
const button = (props: ButtonProps) => {
  return <div>{props.label}</div>;
};

export default button;
