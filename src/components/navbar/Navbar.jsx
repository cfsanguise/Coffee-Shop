import React from 'react';
import styled from 'styled-components';

const StyledNavbar = styled.nav`
    width: 100%;
    padding-top:  ${props => props.footernav ? '0' : '30px'};
    .logo {
        filter: ${props => props.footernav ? 'invert(100%)' : ''};
    }
    .navbar__items {
        list-style-type: none;
        display: flex;
        align-items: flex-end;
        margin-bottom: 0;
        justify-content: ${props => props.footernav ? 'center' : ''};
        .navbar__item {
            a {
                font-style: normal;
                font-weight: normal;
                font-size: 12px;
                line-height: 17px;
                color: ${props => props.footernav ? '#000' : '#fff'};
                text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                text-decoration: none;
                margin-right: 40px;
            }
        }
    }
    
`

const Navbar = props => {
    return (
        <StyledNavbar footernav={props.footernav}>
            <ul className="navbar__items">
                <li className="navbar__item"><a href='#link'><img className='logo' src={'./assets/icons/Logo.svg'} alt='Coffe shop logo' /></a></li>
                <li className="navbar__item"><a href='#link'>Our coffee</a></li>
                <li className="navbar__item"><a href='#link'>For your pleasure</a></li>
            </ul>
        </StyledNavbar>
    )
}

export default Navbar;