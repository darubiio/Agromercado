import React, { useState, useEffect, Fragment } from 'react'
import Search from './Search'
import axios from 'axios'
import Nav from './Nav'

const styles = {
    imageDetalle : {
        maxWidth: '50rem'
    },
    imageCart: {
        maxWidth: '8rem'
    },
    logoCartDelete: {
        fontSize: '2rem'
    }
}

const Main = ({setstate}) => {
    const [response, setresponse] = useState([]) //todos los productos
    const [detalle, setdetalle] = useState(false)           //vista detalle
    const [pdetalle, setpdetalle] = useState(false)       //id elemento detalle
    const [busqueda, setbusqueda] = useState('')       //busqueda
    const [cart, setcart] = useState([])               //items carrito
    const [cartitems, setcartitems] = useState(0)        //cantidad items carrito
    const [carritoon, setcarritoon] = useState(false)    //vista carrito
    const [cartotal, setcartotal] = useState(0)             //precio total

    useEffect(() => {
       getProductos()
    }, [])
    const getProductos = () => {
        axios.get('http://localhost:5000/main')
                .then(({data}) => setresponse(data))
    }
    const handleChange = ({target}) => {
        const { value } = target
        setbusqueda(value)
    }
    const handleDetalle = ({target}) => {
        const { id } = target
        setpdetalle(id)
        console.log(id)
        setdetalle(true)
    }
    const addToCart = (elem, pos) => {
        var cantidad = document.getElementsByClassName('cantidad')[pos].value;
        var valores = response
        valores[pos].cantidad -= cantidad
        elem.cantidadCompra = cantidad
        setcart([...cart, elem])
        setcartitems(cartitems+1)
        console.log(cart);
    }    
    const removeFromCart = (prodid) => {
        let vcart = [...cart]
        vcart = vcart.filter((carItems) => carItems.id !== prodid);
        setcartitems(cartitems-1)
        setcart(vcart)
    }
    useEffect(() => {
        setcartotal(cart ? cart : 0)
        total()
    }, [cart])
    const total = () => {
        let totalV = 0;
        cart.forEach(element => {
            let tot = element.precio * element.cantidadCompra
            totalV+= tot
            setcartotal(totalV)
        })
    }

    //vista carrito (pendiente envolver en componente)
    if (carritoon){
        return(
            <div>
                <Nav setstate={setstate} cartitems={cartitems} setcarritoon={setcarritoon} />
                <div className='bg-white rounded-3 row m-3 shadow'> <hr/>
                <h4>Items en el carrito</h4>
                <div className='col-8'>
                {
                    cart.map((prod)=>                     
                        <div key={prod.id} className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={prod.ruta} style={styles.imageCart} alt={prod.nombre}/>
                            </div>
                            <div className="col-md-6">
                                <div className="card-body">
                                    <h5 className="card-title">{prod.nombre}</h5>
                                    <p className="card-text">precio: ${prod.precio}</p>
                                    <p className="card-text"><small className="text-muted">cantidad: {prod.cantidadCompra}</small></p>
                                </div>                         
                            </div>
                            <div className="col-md-2">
                                <div className="card-body">
                                    <i style={styles.logoCartDelete} onClick={()=>removeFromCart(prod.id)} className="bi bi-cart-dash text-danger"></i>
                                </div>
                            </div>
                        </div>
                        </div>
                    )
                }
                </div>
                <div className='col-4 card mb-3'>
                    <h1>Detalles de compra</h1>
                    <h4>${cartotal}</h4>
                    <a className='btn btn-success mb-1'>Confirmar Compra</a>
                    <a className='btn btn-danger mb-3' onClick={()=>setcarritoon(false)}>Volver</a>
                </div>                
                </div>
            </div>
        )
    }

    //vista detalle (pendiente envolver en componente)
    if (detalle) {
        return(            
            <div>
                <Nav setstate={setstate} cartitems={cartitems} setcarritoon={setcarritoon} />
                <div className='bg-white mt-4 rounded-3'> <hr/>
                    <h3 className='p-2'>Detalle de producto</h3>
                    {
                    response.filter(prod => prod.id == pdetalle).map(filteredProduct => (
                    <div key={filteredProduct.id} className='row'>
                        <div className='col-8'>
                            <img className='rounded-3 mb-2 p-3' style={styles.imageDetalle} src={filteredProduct.ruta}/>
                        </div>
                        <div className='col-4'>
                            <span className="card-title text-secondary"><strong>{filteredProduct.nombre.toUpperCase()}</strong></span><br/>
                            <span className="card-text">Precio: </span><span className='text-primary'>{filteredProduct.precio}</span> <br/>
                            <span className="card-text">Unidades disponibles: </span><span className='text-primary'>{filteredProduct.cantidad}</span><br/><br/><br/>
                            <a className="btn text-danger rounded" id={filteredProduct.id} onClick={()=> setdetalle(false)} href="#" role="button">Volver</a>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        )
    }

    // vista principal
    return (
        <Fragment>
            <Nav setstate={setstate} cartitems={cartitems} setcarritoon={setcarritoon}/>
            <Search handleChange={handleChange}/>
            <div className='row p-4'>
            {
                response.filter(prod => prod.nombre.includes(busqueda)).map((prod, index) =>
                <div key={index} className='col-2 mt-1 hover-zoom'>
                        <div  className="card rounded-3 p-1">
                            <img className='rounded-3 mb-2' src={prod.ruta}/>
                            <div>
                                <h5 className="card-title text-secondary"><strong>{prod.nombre.toUpperCase()}</strong></h5>
                                <span className="card-text">Precio: </span><span className='text-primary'>${prod.precio}</span> <br/>
                                <span className="card-text">Unidades disponibles: </span><span className='text-primary'>{prod.cantidad}</span><br/>
                                <div className='row'>
                                    <div className='col-5'>
                                        <a className="btn text-primary" onClick={handleDetalle} href="#" role="button"><small id={prod.id}>Detalle</small></a>
                                    </div>
                                    <div className='col-7 row'>
                                        <div className='col-9'>
                                            <input type="number" min='1' step='1' className="form-control cantidad" id={index} />
                                        </div>
                                        <div className='col-2'>
                                            <a className="btn text-primary" onClick={()=>addToCart(prod, index)} href="#" role="button"><i className="bi bi-cart-plus"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
             )}
             </div>
        </Fragment>
    )
}

export default Main
