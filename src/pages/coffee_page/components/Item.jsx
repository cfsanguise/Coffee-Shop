import React from 'react';
import styled from 'styled-components';

const StyledItem = styled.div`
    background-color: #FFFFFF;
    border-radius: 8px;
    filter: drop-shadow(5px 5px 15px rgba(0, 0, 0, 0.25));
    .item__content {
        padding: 35px 25px 20px 23px;
        width: 220px;
        height: 260px;
    }
    .item__photo {
        width: 170px;
        height: 115px;
        display: block;
    }
    .item__name {
        font-style: normal;
        font-weight: normal;
        line-height: 20px;
        color: #000000;
        font-size: 14px;
        margin-bottom: 0;
        margin-top: 14px;
    }
    .item__country {
        font-style: normal;
        font-weight: normal;
        line-height: 20px;
        text-align: right;
        color: #000000;
        font-size: 14px;
        margin-top: 14px;
        margin-bottom: 0;
    }
    .item__price {
        font-style: normal;
        font-weight: bold;
        line-height: 20px;
        text-align: right;
        color: #000000;
        font-size: 14px;
        margin-top: 14px;
        margin-bottom: 0;
    }
    a {
        text-decoration: none;
    }
`

const Item = ({name, country, price, photo}) => {
    return (
        <StyledItem>
            <a href='/item'>
                <div className='item__content'>
                    <img className='item__photo' src={photo} alt='coffe package' />
                    <h3 className='item__name'>{name}</h3>
                    <h4 className='item__country'>{country}</h4>
                    <h5 className='item__price'>{price}$</h5>
                </div>
            </a>
        </StyledItem>
    )
}

export default Item;