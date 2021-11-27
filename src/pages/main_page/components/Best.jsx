import React from 'react'
import styled from 'styled-components'
import Items from '../../coffee_page/components/Items'
import Item from '../../coffee_page/components/Item'

const StyledBest = styled.section`
    width: 100%;
    min-height: 495px;
    padding: 80px 0px 110px 0px;
    background: url('http://localhost:3000/assets/images/paper.png') center center/cover no-repeat;
`

const Best = ({data, setCurrentItem}) => {
    return (
        <StyledBest>
            <div className='container'>
                <Items items={data} setCurrentItem={setCurrentItem} />
            </div>
        </StyledBest>
    )
}

export default Best