import React, { Component } from 'react';
import Navbar from './Navbar.component';
import axios from 'axios';
/* import {Link} from 'react-router-dom' */

class Producto extends Component {

    state = {
        productos: []
    }
    componentDidMount() {
        axios.get('http://localhost:3001/productos').then(res => {
            const productos = res.data
            const ordenado = productos.sort((prod1, prod2) => {
                return (prod1.name < prod2.name) ? -1 : 1
            })

            this.setState({ productos })
        })
    }

    deleteProducto(id) {

        axios.get('http://localhost:3001/productosDelete/' + id).then(res => {
            if (res.status(400)) {
                alert("error")
            }
            else {
                alert("producto eliminado")
            }
        })
    }


    render() {
        return (
            <div className="container">
                <Navbar />
                <center><h4>OBTENER PRODUCTO </h4></center>

                {this.state.productos.map(producto => <div>
                    <strong> Name: </strong>{producto.name}<div></div>
                    <strong> Description: </strong>{producto.description}<div></div>
                    <strong> Quantity: </strong>{producto.quantity}<div></div>
                    <strong> Warrantly: </strong>{producto.warrantly}<div></div>
                    <strong> Price: </strong>{producto.price}<div></div>
                    <strong> Status: </strong>{producto.status}<div></div>
                    <strong> CreateAt: </strong>{producto.createAt}<div></div>
                    <a onClick={() => this.deleteProducto(producto.id)} class="btn btn-danger">Eliminar</a>
                </div>)}
            </div>
        )
    }
}

export default Producto;
