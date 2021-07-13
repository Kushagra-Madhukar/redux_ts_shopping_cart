import React from 'react'
import styled from 'styled-components'

const Grid = styled.div<{width: string, hGap: string, vGap: string}>`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(${props => props.width}, 1fr));
    column-gap: ${props => props.hGap};
    row-gap: ${props => props.vGap};
    justify-content: center;
    width: 100%;
`
const ContentHolder = styled.div`
    width: fit-content;
    grid-row: span 1;
    grid-column: span 1;
    /* justify-self: center; */
`
type GridProps = {
    width?: string
    children: React.ReactElement[]
    vGap?: string
    hGap?: string
}

const GridMaker: React.FC<GridProps> = ({width = '300px', children, vGap = '1em', hGap = '1em'}) => {
    return (
        <Grid width={width} vGap={vGap} hGap={hGap}>
            {children && children?.length !== 0 && children?.map((child, i) => <ContentHolder key={i}>{child}</ContentHolder>)}
        </Grid>
    )
}

export default GridMaker
