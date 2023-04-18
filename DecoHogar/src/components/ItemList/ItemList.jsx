import React from "react"
import Item from "./Item";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const ItemList = ({productos}) => {
  return (
      productos.map (producto => <Item key={producto.id} producto={producto} /> )
  );
  }

export default ItemList