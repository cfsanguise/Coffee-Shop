import React from 'react';
import styled from 'styled-components';
import Item from './Item';

const StyledItems = styled.section`
    margin-top: 60px;
    display: grid;
    grid-template-columns: repeat(3, 220px);
    grid-template-rows: 260px;
    grid-auto-rows: 260px;
    grid-gap: 70px; 

`

const Items = ({items, setCurrentItem}) => {
    return (
        <StyledItems>
            {items.map(({name, country, price, photo, id, best}) => {
                return <Item best setCurrentItem={setCurrentItem} name={name} country={country} price={price} photo={photo} key={id} id={id} />
            })}
        </StyledItems>
    )
}

export default Items;