import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from './components/Landing.component';
import ProductoAdd from './components/AddProducto.component';
import Producto from './components/ProductosGet.component';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/addProducto" component={ProductoAdd} />
            <Route exact path="/productos" component={Producto} />
          </div>
        </div>
      </Router>
    );
  }
}
export default App;