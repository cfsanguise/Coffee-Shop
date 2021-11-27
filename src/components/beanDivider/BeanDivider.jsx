import React from 'react';
import styled from 'styled-components';

const StyledBeanDivider = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    .bean {
        img {
            filter: ${props => props.white ? 'unset': 'invert(100%)'};
        }
    }
    .line {
        display: block;
        width: 60px;
        height: 1px;
        background-color: ${props => props.white ? '#fff': '#000'};
        &.left {
            margin-right: 25px;
        }
        &.right {
            margin-left: 25px;
        }
    }
`;

const BeanDivider = ({white}) => {
    return (
        <StyledBeanDivider white={white}>
            <div className='line left'></div>
            <div className='bean'><img src={'http://localhost:3000/assets/icons/Beans.svg'} alt='bean divider' /></div>
            <div className='line right'></div>
        </StyledBeanDivider>
    )
}

export default BeanDivider;