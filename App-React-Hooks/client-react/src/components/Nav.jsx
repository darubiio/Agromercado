import React from 'react'

const Nav = ({setstate, cartitems, setcarritoon}) => {
    
    return (
        <nav className="navbar navbar-light bg-light rounded-3 shadow">
                <div className="container-fluid">
                    <a href className="navbar-brand text-primary">Bodega</a>
                    <form className="d-flex">
                        <a href className="nav-link text-secondary"><i className="bi bi-box"></i></a>
                        <a href className="nav-link"><i className="bi bi-cart4"></i><small className='text-danger m-3'><strong onClick={()=>setcarritoon(true)} >{cartitems}</strong></small></a>
                        <a href className="nav-link text-danger" onClick={() => setstate(false)}><i className="bi bi-box-arrow-right"></i></a>
                    </form>
                </div>
            </nav>
    )}

export default Nav
