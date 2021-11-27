import React from 'react'
import styled from 'styled-components'
import Navbar from '../../../components/navbar/Navbar'
import BeanDivider from '../../../components/beanDivider/BeanDivider'
import Button from './Button'

const StyledHeader = styled.header`
    width: 100%;
    min-height: 640px;
    background: url('${props => props.photo}') center center/cover no-repeat;
    .header__title {
        font-style: normal;
        font-weight: bold;
        font-size: 40px;
        line-height: 58px;
        color: #FFFFFF;
        text-align: center;
        margin-top: 110px;
        margin-bottom: 20px;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    .header__subtitle {
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 35px;
        color: #FFFFFF;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        text-align: center;
        margin-top: 35px;
        margin-bottom: 20px;
    }
`

const Header = ({photo}) => {
    return (
        <StyledHeader photo={photo}>
            <Navbar />
            <div className='container'>
                <h1 className='header__title'>Everything You Love About Coffee</h1>
                <BeanDivider white />
                <h2 className='header__subtitle'>
                <p>We makes every day full of energy and taste </p>
                <p>Want to try our beans?</p>
                </h2>
                <Button />
            </div>
        </StyledHeader>
    )
}

export default Header