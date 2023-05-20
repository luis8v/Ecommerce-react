import Producto from "./Producto"

const ListadoProductos = ({productos, setProducto, eliminarProducto}) => {
    return (
        <div>
            {productos && productos.length ? (
                <>
                <br></br><br></br>
                <div className="bg-gray-600" >
                <h2 className="font-bold mb-3 text-gray-100 uppercase text-center">Listado Productos</h2>
                </div>
                    { productos.map( producto => (
                        <Producto 
                            key={producto.id}
                            producto={producto}
                            setProducto={setProducto}
                            eliminarProducto={eliminarProducto}
                        />
                    ))}
                    
                </>

            ) : (
                <>
                    <p>
                        Aun no existe registro de Productos                        
                    </p>
                </>
            )}
        </div>
    )
}

export default ListadoProductos