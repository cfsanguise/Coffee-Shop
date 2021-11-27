import React from 'react';
import Header from '../../components/header/Header';
import AboutItem from './components/AboutItem';
import Footer from '../../components/footer/Footer';

const ItemPage = ({country, description, price, photo}) => {
    return (
        <>
            <Header photo={'http://localhost:3000/assets/images/Coffee_shop.png'} />
            <div className='container'>
                <AboutItem photo={photo} country={country} description={description} price={price} />
                <Footer />
            </div>
        </>
    )
}

export default ItemPage;