import React from "react"
import styles from "./Main.module.scss";
import CardList from "../CardList"
import FeedbackPanel from "../FeedbackPanel"


const Main = (props) => {
  const { beers, setBoh } = props


  const contentJsx = beers.length ? (
    <CardList setBoh={setBoh} beers={beers}/>
  ) : (
    <FeedbackPanel header= "no results" />
  );

  return <section>{contentJsx}</section>;
};

export default Main;
