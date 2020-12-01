import React from "react";
import styles from "./SearchBox.module.scss";

const SearchBox = (props) => {
  const { updateSearchText } = props
  return (
    <>
      <input className={styles.searchBox} type="text" placeholder='Search' onInput={e => {
        // if (e.target.value.length > 0) {
        updateSearchText(e.target.value)
        // }
      }} />
    </>
  );
};

export default SearchBox;
