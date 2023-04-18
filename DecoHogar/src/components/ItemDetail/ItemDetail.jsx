import ItemCount from "../ItemCount/ItemCount";



const onAdd = (cantidad) => {
    console.log(cantidad)
  }
  
  const ItemDetail = ({producto}) => {
    return (
      <div className="row">
        <h1 className="col-12">Detalle del producto</h1>
        <div className="col-7">
          <img src={producto.imagen} />
          <h2>{producto.nombre}</h2>
          <p>{producto.descripcion}</p>
          <br />
          <h3>Precio: {producto.precio}</h3>
          <br />
          <h4>Stock: {producto.stock}</h4>
        </div>
        <div className="col-5">
          <ItemCount initial={1} stock={10} onAdd={onAdd}/>
        </div>
      </div>
    );
  }
  
  export default ItemDetail
