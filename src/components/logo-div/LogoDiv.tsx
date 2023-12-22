import classes from "./LogoDiv.module.css";
import React from "react";

interface ILogoDiv {
  name: string;
}

const LogoDiv: React.FC<ILogoDiv> = ({ name }) => {
  return (
    <div className={classes.row}>
      <h4 className={classes.company_logo}>{name}</h4>
      <h5 className={classes.company_name}>HealthCare</h5>
    </div>
  );
};

export default LogoDiv;
