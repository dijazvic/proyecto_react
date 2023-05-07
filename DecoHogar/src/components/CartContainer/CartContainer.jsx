import { Link } from "react-router-dom"
import { useCartContext } from "../Context/CartContext"
import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useState } from "react"

const CartContainer = () => {
    const [id, setId] = useState(null)
    const [formData, setFormData] = useState({
        name: "",
        tel:"",
        email:""
    })

    const {cartList, vaciarCarrito, precioTotal, eliminarProducto} = useCartContext()
    console.log(cartList)

const handleSubmit = (event) => {
    event.preventDefault
    const order = {
        comprador: formData,
        items: cartList.map(({id, nombre, precio}) =>({id, nombre, precio})),
        total: precioTotal()
    }
    const db = getFirestore

    const queryCollection = collection(db, "orders")
    addDoc(queryCollection, order)
    .then (resp => setId(resp.id))
    .catch (err => console.log(err))
    .finally (()=>{
        vaciarCarrito()        
    })
    
}

const handleOnChange = (event)=>{
    setFormData({
        ... formData,
        [event.target.name] : event.target.value
    })
}
    return (
        <>
        {id && <h3>El id de la orden de la compra es: {id}</h3>}
        {cartList.length === 0 ?
        <div>
            <h3>No hay productos</h3>
            <Link to ="/">Ir a ver productos</Link>
        </div>
        :
        <div>
            {cartList.map(producto => (
                <li key={producto.id}>
                    <img src={producto.imagen} alt="imagen" className="w-25"></img>
                    Nombre: {producto.nombre} 
                    Cantidad: {producto.cantidad}
                    <button className="btn btn-danger" onClick={()=> eliminarProducto(producto.id)} >{" "} X {" "}</button>
                </li>
            ))}
            <h3>Precio total: {precioTotal()}</h3>
            <button onClick={vaciarCarrito}>Vaciar carrito</button>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Ingrese el nombre"
                    onChange={handleOnChange}
                    value={formData.name}
                />
                <input
                    type="text"
                    name="tel"
                    placeholder="Ingrese el telefono"
                    onChange={handleOnChange}
                    value={formData.tel}
                />
                <input
                    type="text"
                    name="email"
                    placeholder="Ingrese el email"
                    onChange={handleOnChange}
                    value={formData.email}
                />
                <button>Generar orden</button>                               
            </form>
        </div>
        }
        </>
    )
}

export default CartContainer