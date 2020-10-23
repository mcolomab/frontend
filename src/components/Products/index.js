import React from 'react'
import Pagetitle from '../common/Pagetitle'
import AddButton from '../common/AddButton'

function Products() {
    return (
        <>
            <Pagetitle title="Productos" />
            <AddButton text="Nuevo producto" linkto="/products/new" />
        </>
    )
}

export default Products
