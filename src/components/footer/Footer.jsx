import React from 'react';
import styled from 'styled-components';
import Navbar from '../navbar/Navbar';
import BeanDivider from '../beanDivider/BeanDivider';

const StyledFooter = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
    nav, div {
        margin-top: 30px;
    }
    div {
        margin-bottom: 20px;
    }
    
`

const Footer = props => {
    return (
        <StyledFooter>
            <Navbar footernav='true' />
            <BeanDivider />
        </StyledFooter>
    )
}

export default Footer;