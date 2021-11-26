import React from 'react';
import styled from 'styled-components';

const StyledFilters = styled.div`
    width: 100%;
    .label {
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 20px;
        color: #000000;
    }
    .filters__container {
        display: inline-block;
        margin-left: 35px;
    }
    .filters__filter {
        background: #FFFFFF;
        box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.25);
        border-radius: 4px 0px 0px 4px;
        outline: none;
        border: none;
        width: 75px;
        height: 30px;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 17px;
        text-align: center;
        color: #000000;
    }
    .active {
        background-color: #c9c6c6;
    }
`

const Filters = ({setFilter}) => {
    const [filter, setLocalFilter] = React.useState('All')
    const [target, setTarget] = React.useState('')

    const handleClick = e => {
        if (e.target === target) {
            setLocalFilter('All')
            setFilter('All')  
            setTarget('')
        } else {
            const f = e.target.getAttribute('data-filter')
            setLocalFilter(f)
            setFilter(f)  
            setTarget(e.target)
        }
        
        
        
    } 

    return (
        <StyledFilters>
            <label>
                Or filter
                <div className='filters__container'>
                    <button onClick={handleClick} data-filter='Brazil' className={`filters__filter ${filter === 'Brazil' ? 'active': ''}`}>Brazil</button>
                    <button onClick={handleClick} data-filter='Kenya' className={`filters__filter ${filter === 'Kenya' ? 'active': ''}`}>Kenya</button>
                    <button onClick={handleClick}  data-filter='Columbia' className={`filters__filter ${filter === 'Columbia' ? 'active': ''}`}>Columbia</button>
                </div>
            </label>
    </StyledFilters>
    )
}

export default Filters