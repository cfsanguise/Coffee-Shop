import React from 'react';
import styled from 'styled-components';

const StyledBeanDivider = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    .bean {
        img {
            filter: invert(100%);
        }
    }
    .line {
        display: block;
        width: 60px;
        height: 1px;
        background-color: black;
        &.left {
            margin-right: 25px;
        }
        &.right {
            margin-left: 25px;
        }
    }
`;

const BeanDivider = props => {
    return (
        <StyledBeanDivider>
            <div className='line left'></div>
            <div className='bean'><img src={'./assets/icons/Beans.svg'} alt='bean divider' /></div>
            <div className='line right'></div>
        </StyledBeanDivider>
    )
}

export default BeanDivider;