import React from 'react';
import styled from 'styled-components';
import Navbar from '../navbar/Navbar';

const StyledHeader = styled.header`
    width: 100%;
    min-height: 260px;
    background: url('${props => props.photo}') center center/cover no-repeat;
    .header__title {
        font-style: normal;
        font-weight: bold;
        font-size: 40px;
        line-height: 58px;
        color: #FFFFFF;
        text-align: center;
        margin-top: 60px;
    }
`

const Header = ({title, photo}) => {
    return (
        <StyledHeader photo={photo}>
            <Navbar />
            <h2 className='header__title'>{title}</h2>
        </StyledHeader>
    )
}

export default Header;