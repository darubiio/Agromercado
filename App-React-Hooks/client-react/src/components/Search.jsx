import React from 'react'

const Search = ({handleChange}) => {
    return (
        <nav className="navbar navbar-light bg-light rounded-3 shadow mt-4">
                <div className="container-fluid">
                    <a href className="navbar-brand text-secondary"><small>Que estas buscando ?</small></a>
                    <form className="d-flex">
                        <input name='busqueda' className="form-control mr-sm-2" type="text" onChange={handleChange} placeholder="Buscar"/>
                    </form>
                </div>                   
            </nav>
    )
}

export default Search
