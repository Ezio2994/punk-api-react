import './App.scss';
import NavBar from "./components/Navbar"
import React, {useState, useEffect} from "react"
import Routes from "./containers/Routes"

function App() {
  let [beers, setBeers] = useState([])
  const [filterByABV, setFilterByABV] = useState(false)
  const [filterByAge, setFilterByAge] = useState(false)
  const [filterByPH, setFilterByPH] = useState(false) 

  const addIsFav = (beer) => {
    return {
      ...beer,
      isFav: false,
    };
  };



  const grabBeers = (searchTerm) => {
    fetch(`https://api.punkapi.com/v2/beers`)
    // fetch(`https://api.punkapi.com/v2/beers?beer_name=${searchTerm}`)
    .then((res) => res.json())
      .then((res) => {
        if (searchTerm !== undefined) {
          res = res.filter(beer => beer.name.toLowerCase().includes(searchTerm.toLowerCase()))
        }

        const newBeers = res.map(addIsFav);
        setBeers(newBeers);
      })
      .catch((err) => {
        console.log(err);
      });
    // }
  };

  if (filterByABV === true) {
    beers = beers.filter(beer => beer.abv > 6);
  }

  if (filterByAge) {
    beers = beers.filter(beer => beer.first_brewed.charAt(5) < 1 || beer.first_brewed.charAt(3) < 2 )
  }

  if (filterByPH) {
    beers = beers.filter(beer => beer.ph < 4)
  }

  useEffect(() => {
    grabBeers()
  }, []) 

  return (
    <section>
      <NavBar beers={beers} updateSearchText={grabBeers} setFilterByABV={setFilterByABV} setFilterByAge={setFilterByAge} setFilterByPH={setFilterByPH} filterByABV={filterByABV} filterByAge={filterByAge} filterByPH={filterByPH} />
      <Routes beers={beers} />
    </section>
  );
}

export default App;
