import React from 'react';
import styled from 'styled-components';
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

const About = ({title, photo, p1, p2}) => {
    return (
        <StyledAbout>
            <div className='about__container'>
                <div className='about__image'>
                    <img src={photo} alt='woman with a cup of coffee' />
                </div>
                <div className='about__description'>
                    <h3 className='about__header'>{title}</h3>
                    <BeanDivider />
                    <div className='about__text'>
                        <p>{p1}</p>
                        <p>{p2}</p>
                    </div>
                </div>
            </div>
        </StyledAbout>
    )
}

export default About;