import { createContext, useContext, useState } from "react";

const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) => {
    const [cartList, setCartList ] = useState([])

    const agregarAlCart = (newProduct) => {
        const indexProduct = cartList.findIndex(producto => producto.id === newProduct.id)
        
        if (indexProduct === -1 ) {
            setCartList([
                ...cartList,
                newProduct
            ])              
        } else {
            cartList[indexProduct].cantidad += newProduct.cantidad
            setCartList( [ ...cartList ] )
        }

    }

    const cantidadTotal = () => cartList.reduce( (cantidadTotal, objProducto) => cantidadTotal += objProducto.cantidad, 0)

    const precioTotal = () => {
        return cartList.reduce((totalPrice, objProducto) => totalPrice += (objProducto.precio * objProducto.cantidad), 0)
    }

    const eliminarProducto = (pid) =>{

        const indexProduct = cartList.findIndex(producto => producto.id === pid)

        if (cartList[indexProduct].cantidad > 1) {
            cartList[indexProduct].cantidad = cartList[indexProduct].cantidad -  1            
            setCartList( [...cartList] )
        } 
        else {
            setCartList(cartList.filter(producto => producto.id !== pid ))          
        }
    }


    const vaciarCarrito = () => {
        setCartList([])
    }

    return (
        <CartContext.Provider value={{
            cartList,
            agregarAlCart,
            vaciarCarrito,
            precioTotal,
            cantidadTotal,
            eliminarProducto
        }}>
            {children}
        </CartContext.Provider>
    )
}