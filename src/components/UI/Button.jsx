import React from "react";

const Button = ({style,className,onClick,children}) => {
  return (
    <div>
      <button style={style} className={className} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
