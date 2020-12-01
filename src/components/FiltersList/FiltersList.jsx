import React from "react";
import styles from "./FiltersList.module.scss";


const FiltersList = (props) => {
  const { setFilterByABV, setFilterByAge, setFilterByPH, filterByABV, filterByAge, filterByPH } = props

  return (
    <>
    <article className={styles.filters}>
      High ABV<input type="checkbox" name="ABV" id="ABV" onClick={() => {
          setFilterByABV(!filterByABV)
      }} />
      </article>
      <article className={styles.filters}>
      Aged<input type="checkbox" name="aged" id="aged" onClick={() => {
        setFilterByAge(!filterByAge)
      }} />
      </article>
      <article className={styles.filters}>
      Acidity<input type="checkbox" name="acidity" id="acidity" onClick={() => {
        setFilterByPH(!filterByPH)
      }} />
      </article>
    </>
  );
};

export default FiltersList;
