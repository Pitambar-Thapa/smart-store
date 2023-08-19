import {Outlet, Link} from 'react-router-dom';

const NavBar = ()=>{
    return (<>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand">
                <Link to="/">Smart store</Link>
                </a>
                <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page">
                    <Link to="/">Home</Link>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link">
                        <Link to="/report">Report</Link>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link">
                        <Link to="/billing">Billing</Link>
                    </a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        <Outlet/>
        </>
    )
}

export default NavBar