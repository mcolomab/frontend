import React, { useEffect, useState } from 'react'
import store from 'store'
import Pagetitle from '../common/Pagetitle'
import AddButton from '../common/AddButton'

function Customers() {
  const [partners, setPartners] = useState([])

  useEffect(() => {
    const storePartners = store.get('partners') ? store.get('partners') : []
    setPartners(storePartners)
  }, [])

  return (
    <>
      <Pagetitle title="Socios" />
      <AddButton text="Nuevo socio" linkto="/partners/new" />
      <br />
      <br />
      {partners.length > 0 &&
        <div className="table-responsive">
          <table className="table table-striped table-sm">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Doc #</th>
              </tr>
            </thead>
            <tbody>
              {partners.map((partner) => (
                <tr key={partner.name}>
                  <td>{partner.name}</td>
                  <td>{partner.document_number}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      }
    </>
  )
}

export default Customers