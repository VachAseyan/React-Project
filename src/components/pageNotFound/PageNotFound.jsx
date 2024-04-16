import React from "react";
import { Link } from "react-router-dom";
import style from "./PageNotFound.module.css";

const PageNotFound = () => {
  return (
    <div className={style.error}>
      <h2>Page Not Found 404</h2>
      <Link to={"/"}>Go to Home page</Link>
    </div>
  );
};

export default PageNotFound;