const Producto = ({ producto, setProducto, eliminarProducto }) => {
  //const { nombre, matricula, foto, carrera, id } = producto;
  const { nombre, descripcion, foto, precio, id, categoria, raiting } = producto;

  const handleEliminar = () => {
    const respuesta = "¿Deseas eliminar este producto?";
    if (respuesta) {
      eliminarProducto(id);
    }
  };

  const handleEditar = () => {
    setProducto(producto);
  };

  return (
    <div className="rounded-xl border border-gray-700 bg-gray-800 p-4">
      <div className="flex justify-center items-center h-3/4">
        <img
          className="w-40 h-40 rounded-full mx-auto"
          src={foto}
          alt={nombre}
        />

        <div className="block h-full rounded-lg border border-gray-700 p-4 hover:border-green-600 w-3/5">
          <p className="text-2xl mb-7 text-white">
            Nombre: {""}
            <span className="font-normal normal-case">{nombre}</span>
          </p>

          <p className="text-2xl mb-7 text-white">
            Descripción: {""}
            <span className="font-normal normal-case">{descripcion}</span>
          </p>
          <p className="text-2xl mb-7 text-white">
            Precio: {""}
            <span className="font-normal normal-case">{precio}</span>
          </p>
          <p className="text-2xl mb-7 text-white">
            Categoria: {""}
            <span className="font-normal normal-case">{categoria}</span>
          </p>
          <p className="text-2xl mb-7 text-white">
            Raiting: {""}
            <span className="font-normal normal-case">{raiting}</span>
          </p>
        </div>
      </div>

      <div className="flex justify-between mt-10">
        <button
          type="button"
          onClick={handleEditar}
          className="py-2 px-10 bg-gray-200 hover:bg-lime-400 text-black font-bold uppercase rounded-lg"
        >
          Editar
        </button>

        <button
          type="button"
          onClick={handleEliminar}
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Producto;
