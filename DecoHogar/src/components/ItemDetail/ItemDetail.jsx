import ItemCount from "../ItemCount/ItemCount";
import { useCartContext } from "../Context/CartContext";
 
  const ItemDetail = ({producto}) => {
    const {agregarAlCart} = useCartContext()
    const onAdd = (cantidad) => {
      console.log(cantidad)
      agregarAlCart({...producto, cantidad})
    }
   
    return (
      <div className="row">
        <h2 className="col-12">Detalle del producto</h2>
        <div className="col-6">
          <img src={producto.imagen}/>
          <h3>{producto.nombre}</h3>
          <br />
          <h4>Precio: {producto.precio}</h4>
          <br />
          <h5>Stock: {producto.stock}</h5>
        </div>
        <div className="col-5">
          <ItemCount initial={1} stock={10} onAdd={onAdd}/>
        </div>
      </div>
    )
  }
  
  export default ItemDetail
