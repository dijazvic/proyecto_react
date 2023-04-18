import { useCount } from "../Hooks/useCount"



const ItemCount = ({initial=1, stock=10, min=1, onAdd}) => {
const {contador, increment, decrement, reset } = useCount(min, initial, stock) 

    function handleOnAdd() {
    onAdd(contador)
}

return (
    <div>
        <h2>Contador: {contador}</h2>
        <button onClick={increment}> + </button>
        <button onClick={decrement}> - </button>
        <button onClick={handleOnAdd}> Agregar al carrito </button>
    </div>
)}

export default ItemCount
