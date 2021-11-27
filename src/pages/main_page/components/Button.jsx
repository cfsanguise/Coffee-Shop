import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledButton = styled.button`
    background-color: transparent;
    width: 120px;
    height: 30px;
    border: 1px solid #FFFFFF;
    box-sizing: border-box;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 3px;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    color: #FFFFFF;
    display: block;
    margin: 0 auto;
`

const Button = props => {
    return (
        <Link style={{textDecoration: 'none'}} to='/ourcoffee'>
            <StyledButton>
                More
            </StyledButton>
        </Link>
        
    )
}

export default Button