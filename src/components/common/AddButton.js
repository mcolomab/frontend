import React from 'react'
import { Link } from 'react-router-dom'

function AddButton({ text, linkto }) {
    return (
        <Link to={linkto}>
            <button type="button" className="btn btn-success">
                {text}
            </button>
        </Link>
    )
}

export default AddButton
