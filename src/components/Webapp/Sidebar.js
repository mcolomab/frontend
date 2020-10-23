import React from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'

function Sidebar() {
    return (
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div className="sidebar-sticky pt-3">
                <ul className="nav flex-column">
                    <Link to="/">
                        <li className="nav-item">
                            <span className="nav-link active">Dashboard</span>
                        </li>
                    </Link>
                    <li className="nav-item">
                        <a className="nav-link" href="/#">
                            Orders
                        </a>
                    </li>
                    <Link to="/products">
                        <li className="nav-item">
                            <span className="nav-link">Productos</span>
                        </li>
                    </Link>
                    <Link to="/partners">
                        <li className="nav-item">
                            <span className="nav-link">Socios</span>
                        </li>
                    </Link>
                    <li className="nav-item">
                        <a className="nav-link" href="/#">
                            Reports
            </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/#">
                            Integrations
            </a>
                    </li>
                </ul>

                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                    <span>Saved reports</span>
                    <a className="d-flex align-items-center text-muted" href="/#" aria-label="Add a new report">
                    </a>
                </h6>
                <ul className="nav flex-column mb-2">
                    <li className="nav-item">
                        <a className="nav-link" href="/#">
                            Current month
            </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/#">
                            Last quarter
            </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/#">
                            Social engagement
            </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/#">
                            Year-end sale
            </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Sidebar
