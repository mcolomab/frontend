import React from 'react'
import { useHistory } from 'react-router-dom'
import Pagetitle from '../common/Pagetitle'
import ProductForm from './ProductForm.jsx'

function ProductAdd() {
    let history = useHistory()

    function handleSubmit(product) {
        console.log("Producto añadido: ", product)
    }

    function handleCancel(e) {
        e.preventDefault();
        history.push("/products");
    }

    return (
        <>
            <Pagetitle title="Nuevo Producto" />
            <ProductForm handleParentSubmit={handleSubmit} handleCancel={handleCancel} />
        </>
    )
}

export default ProductAdd