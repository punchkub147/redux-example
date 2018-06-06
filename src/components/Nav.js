import React from "react";
import { Link } from "react-router-dom";
export default props => (
  <div>
    {props.pages.map(({ name, path }, key) => (
      <Link to={path} key={key}>
        {name}
      </Link>
    ))}
  </div>
);
