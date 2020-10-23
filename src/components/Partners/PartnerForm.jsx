import React, { useState } from 'react'
import { Prompt } from 'react-router-dom';

function PartnerForm({ editingPartner = {
    name: '',
    partner_type: 'customer',
    document_type: 'ruc',
    document_number: '',
    address: ''
}, handleParentSubmit, handleCancel }) {
    const [partner, setPartner] = useState(editingPartner);
    const [formChanged, setFormChanged] = useState(false);

    function handleSubmit(event) {
        event.preventDefault()
        handleParentSubmit(partner)
    }

    function handleChange(e) {
        let { name, value } = e.target
        setPartner({ ...partner, [name]: value })
        setFormChanged(true)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Prompt when={formChanged} message="¿Seguro de salir del formulario?" />
                <div className="form-group">
                    <label htmlFor="name">Nombre</label>
                    <input id="name" name="name" className="form-control" type="text" value={partner.name} onChange={handleChange} required />
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label htmlFor="partnerType">Tipo de socio</label>
                        <select name="partner_type" value={partner.partner_type} onChange={handleChange} id="partnerType" className="form-control">
                            <option value="customer">Cliente</option>
                            <option value="provider">Proveedor</option>
                            <option value="cp">Cliente y Proveedor</option>
                        </select>
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="documentType">Tipo de documento</label>
                        <select name="document_type" value={partner.document_type} onChange={handleChange} id="documentType" className="form-control">
                            <option value="ruc">RUC</option>
                            <option value="dni">DNI</option>
                            <option value="ce">Cedula extranjera</option>
                        </select>
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="documentNumber">Número de documento</label>
                        <input id="documentNumber" name="document_number" className="form-control" type="text" value={partner.document_number} onChange={handleChange} required />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="address">Dirección</label>
                    <input id="address" name="address" className="form-control" type="text" value={partner.address} onChange={handleChange} required />
                </div>
                <button type="submit" className="btn btn-primary">Guardar</button>
                {' '}<button className="btn btn-light" onClick={handleCancel}>Descartar</button>
            </form>
        </>
    )
}

export default PartnerForm
