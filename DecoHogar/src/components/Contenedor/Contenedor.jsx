import { useEffect, useState } from "react"

let productos = [
    {id: "1", nombre: "agua", stock: "60"},
    {id: "2", nombre: "coca cola", stock: "40"},
    {id: "3", nombre: "jugo", stock: "30"}
]


let mockFetch = (id) =>{
    return new Promise( (resolve, reject) => {
        setTimeout (()=>{
            resolve (productos)
        }, 2000)
    })
}

const Contenedor = () => {
    const [productos, setProductos] = useState ([])
    
    useEffect (()=>{
        mockFetch()
            .then (resp => setProductos(resp))
            .catch (err => console.log (err))
            .finally (()=> console.log ("Siempre a lo ultimo"))
    }, [])
    
    console.log(productos)

return (
    <div>
       {    productos.length !==0 ?
            productos.map( producto => <li key={producto.id}>{producto.nombre}</li>)
            :
            <h2>Cargando...</h2> 
       }
    </div>
)
}
export default Contenedor