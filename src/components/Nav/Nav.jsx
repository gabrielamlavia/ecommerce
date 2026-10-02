import { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import { useCart} from "../../context/CartContext.jsx";


export const Nav = () => {

  const{ getTotalItems } = useCart();
  const totalItems = getTotalItems();

  const [menuOpen, setMenuOpen] = useState(false);

  const categorias = ["infantil", "dama", "hombre"];

  return (
      <nav>
        <ul className="nav-list">
          <li>
            <Link to={"/"}>Home</Link>
          </li>

          <li className="dropdown">
            <button
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
                className="dropdown-btn"
            >
              Categorías
            </button>

            {menuOpen && (
                <ul className="dropdown-menu">
                  {categorias.map((categoria) => (
                      <li key={categoria}>
                        <Link
                            to={`/category/${categoria}`}
                            onClick={() => setMenuOpen(false)}
                        >
                          {categoria}
                        </Link>
                      </li>
                  ))}
                </ul>
            )}
          </li>

          <li>
            <Link to={"/cart"}>
              Carrito🛒
              {totalItems > 0 && <span className="incart">{totalItems}</span>}
            </Link>
          </li>
        </ul>
      </nav>
  );
};