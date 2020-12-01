import React, { useState } from "react";
import Favourite from "../../containers/Favourite";
import styles from "./Card.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

library.add(fas, far)


const Card = (props) => {
  let {
    name,
    image_url,
    description,
    abv,
  } = props.beer

  const [favourite, setFavourite] = useState([])
  
  const heartIcon = props.beer.isFav ? ["fas", "heart"] : ["far", "heart"];

  return (
    <div className={styles.beerCard}>
      <h1>{name}</h1>
      <img src={image_url} alt="image not available"/>
      <h2>abv: {abv}%</h2> 
      <h3 onClick={() => {
        props.beer.isFav = !props.beer.isFav
        setFavourite(props.beer.isFav)
        }}>
      <FontAwesomeIcon icon={heartIcon} />
      </h3>
      <article>
        <p>{description}</p>
      </article>
    </div>
    );
};

export default Card;
