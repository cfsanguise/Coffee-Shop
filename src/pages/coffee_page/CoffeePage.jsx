import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import About from './components/About';
import Divider from '../../components/divider/Divider';
import Search from './components/Search';
import Filters from './components/Filters';
import Items from './components/Items';
import Footer from './components/Footer';

const StyledFiltersBlock = styled.div`
    width: 100%;
    margin-top: 60px;
    display: grid;
    grid-template-columns: repeat(2, 50%);
`

const CoffeePage = ({items, setTerm, setFilter}) => {
    return (
        <>
            <Header />
            <div className='container'>
            <About />
            <Divider />
            <StyledFiltersBlock>
                    <Search setTerm={setTerm} />
                    <Filters setFilter={setFilter} />
            </StyledFiltersBlock>
            <Items items={items} />
            <Footer />
            </div>
        </>
    )
}

export default CoffeePage;