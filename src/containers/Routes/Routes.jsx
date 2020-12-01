import React from "react";
import styles from "./Routes.module.scss";

import { Router } from "@reach/router";

import Main from "../../components/Main";
import Favourites from "../Favourite";

const Routes = (props) => {
  const { beers } = props;



  return (
    <Router>
      <Main path="/" beers={beers} />
      <Favourites beers={beers} path="favourites" />
    </Router>
  );
};

export default Routes;
