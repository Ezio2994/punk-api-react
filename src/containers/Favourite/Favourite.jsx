import React, { useState, useEffect } from "react";
import styles from "./Favourite.module.scss";
import CardList from "../../components/CardList"
import FeedbackPanel from "../../components/FeedbackPanel"

const Favourite = (props) => {
  let { beers } = props;

beers = beers.filter(beer => beer.isFav === true)

  const contentJsx = beers.length ? (
    <CardList beers={beers} />
    ) : (
    <FeedbackPanel header= "no favourite saved" />
  );

  return <section>{contentJsx}</section>;
};

export default Favourite;