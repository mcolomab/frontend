import React, { useState } from 'react'
import { Prompt } from 'react-router-dom';

function ProductForm({ editingProduct = {
  name: '',
  could_be_sold: true,
  could_be_bought: false,
  is_manufactured: true,
  product_type: 'almacenable',
  price: 1,
  cost: 0,
  intcod: '',
  sunatcod: ''
}, handleParentSubmit, handleCancel }) {
  const [product, setProduct] = useState(editingProduct);
  const [formChanged, setFormChanged] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    handleParentSubmit(product)
  }

  function handleChange(e) {
    let { name, value } = e.target
    setProduct({ ...product, [name]: value })
    setFormChanged(true)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Prompt when={formChanged} message="¿Seguro de salir del formulario?" />
        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <input id="name" name="name" className="form-control" type="text" value={product.name} onChange={handleChange} />
        </div>
        <div className="form-check">
          <input type="checkbox" checked={product.could_be_sold} onChange={e => setProduct({ ...product, could_be_sold: !product.could_be_sold })} className="form-check-input" id="check1" />
          <label htmlFor="check1" className="form-check-label">Puede ser vendido</label>
        </div>
        <div className="form-check">
          <input type="checkbox" checked={product.could_be_bought} onChange={e => setProduct({ ...product, could_be_bought: !product.could_be_bought })} className="form-check-input" id="check2" />
          <label htmlFor="check2" className="form-check-label">Puede ser comprado</label>
        </div>
        <div className="form-check">
          <input type="checkbox" checked={product.is_manufactured} onChange={e => setProduct({ ...product, is_manufactured: !product.is_manufactured })} className="form-check-input" id="check3" />
          <label htmlFor="check3" className="form-check-label">Fabricado</label>
        </div>
        <br />
        <div className="form-row">
          <div className="form-group col-md-4">
            <label htmlFor="productType">Tipo de producto</label>
            <select name="product_type" value={product.product_type} onChange={handleChange} id="productType" className="form-control">
              <option value="almacenable">Almacenable</option>
              <option value="servicio">Servicio</option>
              <option value="consumible">Consumible</option>
            </select>
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="price">Precio de venta</label>
            <input id="price" name="price" className="form-control" type="text" value={product.price} onChange={handleChange} />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="cost">Costo</label>
            <input id="cost" name="cost" className="form-control" type="text" value={product.cost} onChange={handleChange} />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="intcod">Código interno</label>
            <input id="intcod" name="intcod" className="form-control" type="text" value={product.intcod} onChange={handleChange} />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="sunatcod">Código sunat</label>
            <input id="sunatcod" name="sunatcod" className="form-control" type="text" value={product.sunatcod} onChange={handleChange} />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Guardar</button>
        {' '}<button className="btn btn-light" onClick={handleCancel}>Descartar</button>
      </form>
    </>
  )
}

export default ProductForm
