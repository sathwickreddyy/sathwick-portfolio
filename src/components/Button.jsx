import React from "react";

const Button = ({ isBeam, name, containerClass }) => {
  return (
    <div className={`btn ${containerClass}`}>
      {isBeam && (
        <span className="relative flex h-3 w-3">
          <span className={"btn-ping"} />
          <span className={"btn-ping_dot"} />
        </span>
      )}
      {name}
    </div>
  );
};
export default Button;
