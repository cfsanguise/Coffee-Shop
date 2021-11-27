import React from 'react';
import styled from 'styled-components';
import BeanDivider from '../../../components/beanDivider/BeanDivider';

const StyledAboutItem = styled.section`
    margin-top: 70px;
    margin-bottom: 60px;
    .about__container {
        padding-left: 20px;
        padding-right: 20px;
        display: grid;
        grid-template-columns: repeat(2, 50%);
        column-gap: 40px;
        .about__description {
            align-self: center;
            text-align: center;
        }
    }
    .about__header {
        margin-bottom: 20px;
    }
    .about__data {
        margin-top: 25px;
    }
    .about__image {
       display: flex;
       justify-content: center;
       align-items: center;
    }
    .about__description {
        max-height: 340px;
        .about__country {
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 20px;
            color: #000000;
            text-align: left;
        }
        .about__item-description {
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 20px;
            color: #000000;
            text-align: left;
            margin-top: 15px;
        }
        .about__price {
            font-style: normal;
            font-weight: bold;
            font-size: 14px;
            line-height: 20px;
            text-align: left;
            color: #000000;
            margin-top: 15px;
        }
        .about__price-big {
            font-style: normal;
            font-weight: normal;
            font-size: 24px;
            line-height: 35px;
            color: #000000;
        }
    }
`

const ItemAbout = ({country, description, price, photo}) => {
    return (
        <StyledAboutItem>
            <div className='about__container'>
                <div className='about__image'>
                    <img src={photo} alt='woman with a cup of coffee' />
                </div>
                <div className='about__description'>
                    <h3 className='about__header'>About it</h3>
                    <BeanDivider />
                    <div className='about__data'>
                        <h3 className='about__country'>
                            <b>Country:</b> {country}
                        </h3>
                        <h4 className='about__item-description'>
                        <b>Description:</b> {description}
                        </h4>
                        <h5 className='about__price'>
                            <b>Price:</b> <span className='about__price-big'>{price}$</span>
                        </h5>
                    </div>
                </div>
            </div>
        </StyledAboutItem>
    )
}

export default ItemAbout