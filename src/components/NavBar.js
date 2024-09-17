import React from "react";
import DropdownItem from './DropdownItem';

function NavBar({ fonction ,categories,search}) {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <div className="container-fluid">
                <p className="navbar-brand fw-bold mt-2 ms-4">Library</p>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="home nav-link px-3 text-light" aria-current="page" onClick={() => { fonction('All'); }}>Home</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-light" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Category
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                {categories.map((item) => (
                                    <DropdownItem key={item} item={item} fonction={fonction} />
                                ))}
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search for a book" aria-label="Search" id="searchBook" />
                        <button className="btn btn-outline-success" type="submit" onClick={(e)=>{search(e)}}>Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
