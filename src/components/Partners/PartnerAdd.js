import React from 'react'
import { useHistory } from 'react-router-dom'
import Pagetitle from '../common/Pagetitle'
import PartnerForm from './PartnerForm.jsx'

function PartnerAdd() {
    let history = useHistory()

    function handleSubmit(partner) {
        console.log("Socio añadido: ", partner)
    }

    function handleCancel(e) {
        e.preventDefault();
        history.push("/partners");
    }

    return (
        <>
            <Pagetitle title="Nuevo socio" />
            <PartnerForm handleParentSubmit={handleSubmit} handleCancel={handleCancel} />
        </>
    )
}

export default PartnerAdd