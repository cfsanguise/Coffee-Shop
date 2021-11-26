import React from 'react';
import CoffePage from './pages/coffee_page/CoffeePage';

const App = () => {
  const [data, setData] = React.useState({
    coffee: [{name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: 6.99, photo: './assets/images/Aromistico.png'},
             {name: 'FROMISTICO Coffee 1 kg', country: 'Kenya', price: 6.99, photo: './assets/images/Aromistico.png'},
             {name: 'AROMISTICO Coffee 1 kg', country: 'Columbia', price: 6.99, photo: './assets/images/Aromistico.png'},
             {name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: 6.99, photo: './assets/images/Aromistico.png'},
             {name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: 6.99, photo: './assets/images/Aromistico.png'},
             {name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: 6.99, photo: './assets/images/Aromistico.png'},
            ],
    term: '',
    filter: 'All'
  })

  const setTerm = term => {
    setData(state => ({
      ...state,
      term
    }))
  }

  const setFilter = filter => {
    setData(state => ({
      ...state,
      filter
    }))
  }

  const makeSearch = (data, term) => {
    console.log(typeof(data.name))
    const searchedData = data.filter(item => {
      return item.name.toLowerCase().includes(term.toLowerCase())
    })
    return searchedData;
  }

  const makeFiltration = (data, filter) => {
    const filteredData = data.filter(item => {
      if (filter === 'All') {
        return data
      }
      return item.country === filter
    })
    return filteredData;
  }

  const visibleData = makeFiltration(makeSearch(data.coffee, data.term), data.filter)
  console.log(visibleData);

  return (
    <CoffePage setTerm={setTerm} setFilter={setFilter} items={visibleData} />
  );
}

export default App;
