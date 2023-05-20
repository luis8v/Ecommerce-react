import React from "react";
import { useState, useEffect } from "react";
import { Footer, Navbar } from "../components";
import ListadoProductos from "../components/ListadoProductos";
import Formulario from "../components/Formulario";

const CreateProduct = () => {
  const [productos, setProductos] = useState([]);
  const [producto, setProducto] = useState({});

  useEffect(() => {
    const obtenerLS = () => {
      const productosLS = JSON.parse(localStorage.getItem("productos")) ?? [];
      setProductos(productosLS);
    };
    obtenerLS();
  }, []);

  useEffect(() => {
    localStorage.setItem("productos", JSON.stringify(productos));
  }, [productos]);

  const eliminarProducto = (id) => {
    const productosActualizados = productos.filter(
      (producto) => producto.id !== id
    );
    setProductos(productosActualizados);
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Vender Productos</h1>
        <hr />
        <div class="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <Formulario
              className="mt-12 md:flex"
              productos={productos}
              setProductos={setProductos}
              producto={producto}
              setProducto={setProducto}
            />
            <ListadoProductos
              productos={productos}
              setProducto={setProducto}
              eliminarProducto={eliminarProducto}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CreateProduct;
