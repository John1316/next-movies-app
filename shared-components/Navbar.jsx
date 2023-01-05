import Link from 'next/link'
import { useState } from 'react';

export default function Navbar({userData , logOut}) {
    if(process.browser){
        let collapse = document.querySelector('.collapse');
    }
    const [isOpened, setIsOpened] = useState(false)
    const [isClosed, setIsClosed] = useState(true)
    const showNavbar = () => {
        collapse.classList.add('show')
        setIsOpened(true)
        setIsClosed(false)
    }
    const hideNavbar = () => {
        collapse.classList.remove('show')
        setIsOpened(false)
        setIsClosed(true)
    }
    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
        <Link className="navbar-brand" href="">Noxe</Link>
        { isClosed && <button onClick={showNavbar} className="showNavbar navbar-toggler" type="button" >
        <span className="navbar-toggler-icon"></span>
        </button> }
        { isOpened && <button onClick={hideNavbar} className="hideNavbar navbar-toggler" type="button" >
        <span className="fa fa-times"></span>
        </button> }
        <div className={ userData ? 'collapse navbar-collapse align-items-center justify-content-between' :'collapse navbar-collapse align-items-center justify-content-end' }> 
         <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
            
            <li className="nav-item">
                <Link className="nav-link" href="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" href="tv">Tv</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" href="people">People</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" href="movies">Movies</Link>
            </li>
            
        </ul> 
        <ul className="navbar-nav ml-auto mb-2 mb-lg-0 align-items-center">
            
            <li className="nav-item">
                <i className="fab fa-facebook-f fa-1x mx-1" aria-hidden="true"></i>
                <i className="fab fa-linkedin fa-1x mx-1" aria-hidden="true"></i>
                <i className="fab fa-github fa-1x mx-1" aria-hidden="true"></i>
            </li>
            
            <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            
        </form>
            
            {userData? <><li className="nav-item">
                <Link href="profile" className="nav-link">Profile</Link>
            </li><li onClick={logOut} className="nav-item">
                <span className="nav-link">Logout</span>
            </li></>  : <>
            <li className="nav-item">
                <Link className="nav-link" href="login">Login</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" href="register">Register</Link>
            </li>
            </>}
        </ul>

        </div>
    </div>
    </nav>)
}
