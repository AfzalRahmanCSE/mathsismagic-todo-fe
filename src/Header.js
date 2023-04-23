import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    return <div>

        <nav className="navbar navbar-expand-lg bg-body-secondary bg-warning">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">My Website</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/todo">ToDo</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact Us</Link>
                        </li>
                      
                      
                      
                        </ul>
                        
                        
                            <Link className='btn btn-primary btn-sm me-2' to ='/signin'>Sign in</Link>
                        
                        
                            <Link className='btn btn-success btn-sm me-2' to ='/signup'>Sign up</Link>
                        
                        
                            <button className='btn btn-danger btn-sm me-2 '>Sign out</button>
                        
                       
                    
                        


                    
                </div>
            </div>
        </nav>
    </div>
}

export default Header;