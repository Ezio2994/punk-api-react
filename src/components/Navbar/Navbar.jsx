import React from "react";
import styles from "./Navbar.module.scss";
import SearchBox from "../SearchBox"
import FiltersList from "../FiltersList"
import logo from "../../assets/logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'

import { Link } from "@reach/router";





const Navbar = (props) => {
  const { updateSearchText, setFilterByABV, setFilterByAge, setFilterByPH, filterByABV, filterByAge, filterByPH } = props
  
  return (
    <div className={styles.navBar}>
      <Link to="/">
        <img src={logo} alt=""/>
      </Link>
      <Link to="favourites">
        <h1>Fav <FontAwesomeIcon icon={['fas', 'heart']} /></h1>
        </Link>

      <SearchBox updateSearchText={updateSearchText} />
      <FiltersList updateSearchText={updateSearchText} setFilterByABV={setFilterByABV} setFilterByAge={setFilterByAge} setFilterByPH={setFilterByPH} filterByABV={filterByABV} filterByAge={filterByAge} filterByPH={filterByPH} />
    </div>
  );
};

export default Navbar;
