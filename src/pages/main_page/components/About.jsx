import React from 'react';
import styled from 'styled-components';
import BeanDivider from '../../../components/beanDivider/BeanDivider';

const StyledAbout = styled.section`
    margin: 0 auto;
    margin-top: 70px;
    margin-bottom: 60px;
    .about__description {
        align-self: center;
        text-align: center;
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

const About = ({title, p1, p2}) => {
    return (
        <StyledAbout>
                <div className='about__description'>
                    <h3 className='about__header'>{title}</h3>
                    <BeanDivider />
                    <div className='about__text'>
                        <p>{p1}</p>
                        <p>{p2}</p>
                    </div>
                </div>
        </StyledAbout>
    )
}

export default About;