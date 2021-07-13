import React from 'react'
import { PaddingContainer } from '../styles/themes'
import GridMaker from '../components/GridMaker'
import ProductCard from '../components/Cards/ProductCard'
import { PRODUCT_CARD_WIDTH } from '../config'

const products = [
    {id: 1, img: '', head: 'Paper', stars: 3, price: 5000}, 
    {id: 2, img: '', head: 'Car', stars: 2, price: 10000}
]

const Products = () => {
    return (
        <PaddingContainer>
            {products.length === 0 ? null : products.length === 1 ? <ProductCard head={products[0].head} img={products[0].img} price={products[0].price} stars={products[0].stars}/> :
            <GridMaker width={PRODUCT_CARD_WIDTH}>
                {products.map((p,i) => <ProductCard head={p.head} img={p.img} price={p.price} stars={p.stars} key={p.id}/>)}
            </GridMaker>}
        </PaddingContainer>
    )
}

export default Products
