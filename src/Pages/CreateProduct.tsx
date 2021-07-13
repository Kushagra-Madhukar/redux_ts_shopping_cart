import React from 'react'
import styled from 'styled-components'

const InputField = styled.input`
    ${props => props.theme.inputField({})}
`

const CreateProduct = () => {
    return (
        <div>
            <InputField/>
        </div>
    )
}

export default CreateProduct
