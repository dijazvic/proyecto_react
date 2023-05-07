import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { mockFetch } from "../mockFetch/mockFecth";
import { doc, getDoc, getFirestore } from "firebase/firestore";


function ItemDetailContainer() {
    const [producto, setProducto] = useState({});
    const { pid } = useParams();
  
    useEffect(() => {
      const db = getFirestore()
      const queryDoc = doc(db, "productos", pid)
      getDoc(queryDoc)
        .then(resp => setProducto({id: resp.id, ...resp.data()}))
        .catch(err => console.log(err));
    }, [])
  
    return <ItemDetail producto={producto}/>
  }
  
  export default ItemDetailContainer
  