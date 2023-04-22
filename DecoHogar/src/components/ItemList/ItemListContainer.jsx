import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { mockFetch } from "../mockFetch/mockFecth";

function ItemListContainer ({greeting = "Bienvenidos a DecoHogar"}) {
    const [productos, setProductos] = useState([]);
    const { cid } = useParams();
  
    useEffect(() => {
      if (cid) {
        mockFetch()
          .then(resp =>
            setProductos(resp.filter(prod => prod.categoria === cid)))
          .catch(err => console.log(err));
      } else
        mockFetch()
          .then(resp => setProductos(resp))
          .catch(err => console.log(err));
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