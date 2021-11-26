import React from 'react';
import styled from 'styled-components';

const StyledSearch = styled.input`
    &::placeholder {
        text-align: center;
    }
    width: 180px;
    height: 30px;
    background: #FFFFFF;
    box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    border: none;
    margin-left: 20px;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 17px;
    color: rgba(0, 0, 0, 0.5);
    &:focus, &:active {
        outline: none;
    }
    label {
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 20px;
        color: #000000;
    }
`

const Search = ({setTerm}) => {
    const [term, setLocalTerm] = React.useState('')

    const onChange = e => {
        setLocalTerm(e.target.value)
        setTerm(e.target.value)
    }

    return (
        <label htmlFor='search'>Looking for <StyledSearch onChange={onChange} value={term} type='text' name='search' placeholder='start typing here...' /></label>
    )
}

export default Search;