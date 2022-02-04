import React from "react";
import './Button.css';

const Button = (props) => {
  const {name, onChange, page} = props;

  return(
      <>{page?<button className="button-49" onClick={onChange}>°{name}</button>:null}</>
  );
};

export default Button;
