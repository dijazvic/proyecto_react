import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { mockFetch } from "../mockFetch/mockFecth";
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore"

function ItemListContainer ({greeting = "Bienvenidos a DecoHogar"}) {
    const [productos, setProductos] = useState([])
    const [producto, setProducto] = useState([])
      const { cid } = useParams();
  
    useEffect(() => {
      if (cid) {
        const db = getFirestore()
        const queryCollection = collection(db, "productos")
        const queryFilter = query(queryCollection, where("categoria", "==", cid))
        getDocs(queryFilter)
        .then(resp => setProductos(resp.docs.map(producto =>({id: producto.id, ...producto.data()}) )))
        .catch(err => console.log(err))
      } 
      else {
        const db = getFirestore()
        const queryCollection = collection(db, "productos")
        getDocs(queryCollection)
        .then(resp => setProductos(resp.docs.map(producto =>({id: producto.id, ...producto.data()}) )))
        .catch(err => console.log(err))
      }
    }, [cid])
 
    return (
      <div>
        <h2>{greeting}</h2>
        <h3 className="item-list-container__title">Productos destacados</h3>
        <div className="d-flex flex-wrap justify-content-center">
          <ItemList productos={productos} />
        </div>
      </div>
    )
}    

export default ItemListContainer