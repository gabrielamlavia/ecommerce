import { Item } from "../Item/Item";
import "./ItemDetail.css";
import { useCart } from "../../context/CartContext";

export const ItemDetail = ({ item }) => {

  const { addItem } = useCart();

    const agregarAlCarrito = () => {
     addItem({ ...item });

  };
  return (
    <div className="detail-wrapper">
      <Item {...item}>
        <button className="btn bg-primary primary" onClick={agregarAlCarrito}>
          Agregar al carrito
        </button>
      </Item>
    </div>
  );
};
