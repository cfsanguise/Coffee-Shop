import React from 'react';
import MainPage from './pages/main_page/MainPage';
import CoffePage from './pages/coffee_page/CoffeePage';
import ItemPage from './pages/item_page/ItemPage';
import ForYourPleasure from './pages/for_your_pleasure_page/ForYourPleasure';
import { Routes, Route, Navigate} from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const [data, setData] = React.useState({
    coffee: [{name: 'Solimo Coffee Beans 2 kg', country: 'Brazil', price: '10.75', photo: 'http://localhost:3000/assets/images/Solimo.png', best: true, id: uuidv4()},
             {name: 'FROMISTICO Coffee 1 kg', country: 'Kenya', price: '7.40', photo: 'http://localhost:3000/assets/images/Aromistico.png', id: uuidv4()},
             {name: 'AROMISTICO Coffee 1 kg', country: 'Columbia', price: '6.99', photo: 'http://localhost:3000/assets/images/Aromistico.png', best: true, id: uuidv4()},
             {name: 'BLACKBEAN Coffee 1 kg', country: 'Brazil', price: '7.60', photo: 'http://localhost:3000/assets/images/Aromistico.png', id: uuidv4()},
             {name: 'Presto Coffee Beans 1 kg', country: 'Brazil', price: '15.99', photo: 'http://localhost:3000/assets/images/Presto.png', best: true,  id: uuidv4()},
             {name: 'COCOA Coffee 1 kg', country: 'Brazil', price: '6', photo: 'http://localhost:3000/assets/images/Aromistico.png', id: uuidv4()},
            ],
    term: '',
    filter: 'All',
    currentItem: ''
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

  const setCurrentItem = id => {
    const filtered = data.coffee.filter(item => item.id == id)
    const currentItem = {...filtered[0]}
    setData(state => ({
      ...state,
      currentItem
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

  const getBest = data => {
    return data.filter(item => item.best == true)
  }

  const visibleData = makeFiltration(makeSearch(data.coffee, data.term), data.filter)
  const best = getBest(data.coffee)
  console.log(visibleData, best);

  return (
    <Routes>
        <Route path='/' element={<Navigate to='/main' />} />
        <Route path='/main' element={<MainPage data={best} setCurrentItem={setCurrentItem} />} />
        <Route path='/ourcoffee' element={<CoffePage setCurrentItem={setCurrentItem} setTerm={setTerm} setFilter={setFilter} items={visibleData} />} />
        <Route path='/ourcoffee/item/:id' element={<ItemPage country={data.currentItem.country} description={'some'} price={data.currentItem.price} photo={data.currentItem.photo} />} />
        <Route path='/pleasure' element={<ForYourPleasure setCurrentItem={setCurrentItem} items={visibleData} />} />
    </Routes>
  );
}

export default App;
