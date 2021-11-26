import React from 'react';
import styled from 'styled-components';
import img from '../assets/womanAndCoffee.png';
import BeanDivider from '../../../components/beanDivider/BeanDivider';

const StyledAbout = styled.section`
    margin-top: 70px;
    margin-bottom: 60px;
    .about__container {
        padding-left: 20px;
        padding-right: 20px;
        display: grid;
        grid-template-columns: repeat(2, 50%);
        .about__description {
            align-self: center;
            text-align: center;
        }
    }
    .about__header {
        margin-bottom: 20px;
    }
    .about__text {
        margin-top: 25px;
    }
    .about__description {
        max-height: 340px;
    }
`

const About = props => {
    return (
        <StyledAbout>
            <div className='about__container'>
                <div className='about__image'>
                    <img src={img} alt='woman with a cup of coffee' />
                </div>
                <div className='about__description'>
                    <h3 className='about__header'>About our beans</h3>
                    <BeanDivider />
                    <div className='about__text'>
                        <p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.</p>
                        <p>Afraid at highly months do things on at. Situation recommend objection do intention so questions.
                        As greatly removed calling pleased improve an. Last ask him cold feel
                        met spot shy want. Children me laughing we prospect answered followed. At it went
                        is song that held help face.
                        </p>
                    </div>
                </div>
            </div>
        </StyledAbout>
    )
}

export default About;