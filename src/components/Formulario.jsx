import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({ productos, setProductos, producto, setProducto }) => {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDesctipcion] = useState("");
  const [foto, setFoto] = useState({});
  const [precio, setPrecio] = useState("");
  const [error, setError] = useState(false);
  const [categoria, setCategoria] = useState("");
  const [raiting, setRaiting] = useState("");
  

  useEffect(() => {
    if (Object.keys(producto).length > 0) {
      setNombre(producto.nombre);
      setDesctipcion(producto.descripcion);
      setPrecio(producto.precio);
      setCategoria(producto.categoria);
      setRaiting(producto.setRaiting);
      setFoto(producto.foto);
    }
  }, [producto]);

  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validación del Formulario
    if (!nombre || !descripcion || !foto || !precio || !categoria || !raiting) {
      console.log("Debe ingresar todos los campos");
      setError(true);
      return;
    }

    setError(false);

    let objetoProducto = {
      nombre,
      descripcion,
      precio,
      categoria,
      raiting,
      foto 
    };

    if (producto.id) {
      // Objeto de Alumno
      objetoProducto = {
        nombre,
        descripcion,
        precio,
        categoria,
        raiting
      };
      
      if (foto){
        objetoProducto.foto = typeof foto === "string" ? foto : URL.createObjectURL(foto) 
      }

      producto.nombre = nombre;
      // Editando el Registro
      objetoProducto.id = producto.id;
      const productosActualizados = productos.map((productoState) =>
      productoState.id === producto.id ? objetoProducto : productoState
      );

      setProductos(productosActualizados);
      setProducto({});
    } else {
      objetoProducto = {
        nombre,
        descripcion,
        precio,
        categoria,
        raiting,
        foto: foto ? URL.createObjectURL(foto) : null, // Convertir el archivo en una URL y almacenarla en el objeto del paciente, o almacenar null si no hay archivo seleccionado
      };
      
      // Nuevo registro
      objetoProducto.id = generarId();
      setProductos([...productos, objetoProducto]);
    }

    // Reiniciar el form
    setNombre("");
    setDesctipcion("");
    setPrecio("");
    setCategoria("");
    setRaiting("");
    setFoto(null); // Reiniciar el estado de la foto
  };

  return (
    <div className="container my-3 py-3">
      <form class="row my-4 h-100" onSubmit={handleSubmit}>
        {error && (
          <Error>
            <p>Todos los campos son obligatorios</p>
          </Error>
        )}
        <div class="form my-3">
          <label htmlFor="producto" className="text-3xl mb-7">
            Nombre del Producto
          </label>
          <input
            id="producto"
            type="text"
            placeholder="Nombre del Producto"
            value={nombre}
            class="form-control"
            onChange={(event) => setNombre(event.target.value)}
          />
        </div>

        <div class="form my-3">
          <label htmlFor="descripcion" className="text-3xl mb-7">
            Descripción
          </label>
          <textarea
            id="descripcion"
            type="text"
            rows={4}
            cols={50}
            placeholder="Descripción"
            class="form-control"
            value={descripcion}
            onChange={(event) => setDesctipcion(event.target.value)}
          />
        </div>

        <div class="form my-3">
          <label htmlFor="precio" className="text-3xl mb-7">
            Precio
          </label>
          <input
            id="precio"
            type="number"
            placeholder="Precio"
            class="form-control"
            value={precio}
            onChange={(event) => setPrecio(event.target.value)}
          />
        </div>

        <div class="form my-3">
          <label htmlFor="categoria" className="text-3xl mb-7">
            Categoria
          </label>
          <input
            id="categoria"
            type="text"
            placeholder="Categoria"
            class="form-control"
            value={categoria}
            onChange={(event) => setCategoria(event.target.value)}
          />
        </div>

        <div class="form my-3">
          <label htmlFor="raiting" className="text-3xl mb-7">
            Raiting
          </label>
          <input
            id="raiting"
            type="number"
            placeholder="Raiting"
            class="form-control"
            value={raiting}
            onChange={(event) => setRaiting(event.target.value)}
          />
        </div>

        <div class="form my-3">
          <label htmlFor="foto" className="text-3xl mb-7">
            Foto
          </label>
          <input
            id="foto"
            type="file"
            accept="image/*"
            class="form-control"
            onChange={(event) => setFoto(event.target.files[0])}
          />
        </div>
        <input
          type="submit"
          className="btn btn-dark m-1"
          value={producto.id ? "Editar Producto" : "Agregar Producto"}
        />
      </form>
    </div>
  );
};

export default Formulario;
