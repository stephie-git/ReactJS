import React from 'react'
import { Container } from 'react-bootstrap'

export const ItemListContainer = ( {greeting} ) => {


    return(
        <Container className='my-5'>
        <div>
            <h2>{greeting}</h2>
        </div>
        </Container>

    )



}