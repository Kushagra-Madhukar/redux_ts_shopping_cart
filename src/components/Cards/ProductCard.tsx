import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Rating } from '@material-ui/lab';
import StarIcon from '@material-ui/icons/Star';

const CardHolder = styled.div`
    display: flex;
    flex-direction: column;
    width: ${props => props.theme.productCardWidth};
`
const CardImage = styled.img`
    display: block;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 50%;
`
const CardInfoRegion = styled.div`
    padding: 0.3em;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
const CardHead = styled(Link)`
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 500;
`
const RatingContainer = styled.div`
    display: flex;
`
const Price = styled.div`
`
type ProductProps = {
    stars?: number
    head: string
    price: number
    img: string
}
const ProductCard = ({stars = 0, head, price, img}: ProductProps) => {
    return (
        <CardHolder>
            <CardImage src={img} alt=""/>
            <CardInfoRegion>
                <CardHead to="/">{head}</CardHead>
                <RatingContainer>
                <Rating
                    name="hover-feedback"
                    value={stars}
                    precision={0.5}
                    emptyIcon={<StarIcon fontSize="inherit" stroke="white" stroke-width={0.1}/>}
                    readOnly
                    // onChange={(event, newValue) => {
                    //   // dispatch({id: item.id, value: newValue})
                    //   starHandler(`s${item.id}`,newValue)
                    //   // setStars(newValue)
                    // }}
                    // onChangeActive={(event, newHover) => {
                    //   setHover(newHover);
                    // }}
                  />
                </RatingContainer>
                <Price>{price}</Price>
            </CardInfoRegion>
        </CardHolder>
    )
}

export default ProductCard
