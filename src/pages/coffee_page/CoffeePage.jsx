import React from 'react';
import styled from 'styled-components';
import Header from '../../components/header/Header';
import About from './components/About';
import Divider from '../../components/divider/Divider';
import Search from './components/Search';
import Filters from './components/Filters';
import Items from './components/Items';
import Footer from '../../components/footer/Footer';

const StyledFiltersBlock = styled.div`
    width: 100%;
    margin-top: 60px;
    display: grid;
    grid-template-columns: repeat(2, 50%);
`

const CoffeePage = ({items, setTerm, setFilter, setCurrentItem}) => {
    return (
        <>
            <Header photo='http://localhost:3000/assets/images/Coffee_shop.png' title='Our coffee' />
            <div className='container'>
            <About 
            title='About our beans' 
            photo='http://localhost:3000/assets/images/womanAndCoffee.png' 
            p1='Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.'
            p2='Afraid at highly months do things on at. Situation recommend objection do intention so questions.
            As greatly removed calling pleased improve an. Last ask him cold feel
            met spot shy want. Children me laughing we prospect answered followed. At it went
            is song that held help face.'
            />
            <Divider />
            <StyledFiltersBlock>
                    <Search setTerm={setTerm} />
                    <Filters setFilter={setFilter} />
            </StyledFiltersBlock>
            <Items setCurrentItem={setCurrentItem} items={items} />
            <Footer />
            </div>
        </>
    )
}

export default CoffeePage;