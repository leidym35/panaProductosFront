import axios from 'axios';


export const registerProductos = newProducto => {
    return axios
        .post('http://localhost:3001/addProducto', {
            id: newProducto.id,
            name: newProducto.name,
            description: newProducto.description,
            quantity: newProducto.quantity,
            warrantly: newProducto.warrantly,
            price: newProducto.price,
            status: newProducto.status,
        }).then(res => {
            alert("Producto registrado")
        })
}
