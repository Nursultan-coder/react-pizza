import classNames from "classnames";
import React from "react";

const Button = ({onClick, className, outline, children}) => {
  return (
    <button 
      onClick={onClick} 
      className={classNames('button', className, {
        'button--outline' : outline,
    })}>
      {children}
    </button>
  );
}

export default Button;