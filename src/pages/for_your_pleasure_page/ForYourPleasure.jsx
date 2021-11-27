import React from 'react'
import styled from 'styled-components'
import Header from '../../components/header/Header'
import About from '../coffee_page/components/About'
import Divider from '../../components/divider/Divider'
import Items from '../coffee_page/components/Items'
import Footer from '../../components/footer/Footer'


const ForYourPleasure = ({setCurrentItem, items}) => {
    return (
        <>
            <Header photo='http://localhost:3000/assets/images/Coffee_bg.png' title='For your pleasure' />
            <div className='container'>
                <About
                title='About our goods'
                photo='http://localhost:3000/assets/images/Coffee_img.png'
                p1='Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.'
                p2='Afraid at highly months do things on at. Situation recommend objection do intention so questions.
                As greatly removed calling pleased improve an. Last ask him cold feel
                met spot shy want. Children me laughing we prospect answered followed. At it went
                is song that held help face.'
                  />
                <Divider />
                <Items setCurrentItem={setCurrentItem} items={items} />
                <Footer />
            </div>
        </>
    )
}

export default ForYourPleasure