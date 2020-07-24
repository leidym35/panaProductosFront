import React, { Component } from 'react';
import Navbar from './Navbar.component';
import { registerProductos } from './FProductos.component'

class ProductoAdd extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            description: '',
            quantity: '',
            warrantly: '',
            price: '',
            status: '',
            errors: {}
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    };
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    };
    onSubmit(e) {
        e.preventDefault();

        const newProducto = {
            name: this.state.name,
            description: this.state.description,
            quantity: this.state.quantity,
            warrantly: this.state.warrantly,
            price: this.state.price,
            status: this.state.status,

        };

        registerProductos(newProducto).then(res => {
            this.props.history.push('/productos')
        });
    };

    render() {
        return (
            <div className="container">
                <Navbar />
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className="h3 mb-3 font-weight-normal">Registrar Producto</h1>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    placeholder=""
                                    value={this.state.name}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">description</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="description"
                                    placeholder=""
                                    value={this.state.description}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="quantity">quantity</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="quantity"
                                    placeholder="max 10 numeros"
                                    value={this.state.quantity}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="warrantly">warrantly</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="warrantly"
                                    placeholder=""
                                    value={this.state.warrantly}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="price">price</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="price"
                                    placeholder=""
                                    value={this.state.price}
                                    onChange={this.onChange}
                                />
                            </div>
                            <label>
                                Status
                            <select name="status" value={this.state.value} onChange={this.onChange}>
                                    <option value="seleccionar">Seleccionar</option>
                                    <option name="status" value="active">Active</option>
                                    <option name="status" value="published">Published</option>
                                    <option name="status" value="inactive">Inactive</option>
                                </select>
                            </label>
                            <button
                                type="submit"
                                className="btn btn-lg btn-primary btn-block">
                                Guardar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}


export default ProductoAdd;
