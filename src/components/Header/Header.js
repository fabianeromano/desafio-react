import { useContext } from "react";
import CartWidget from "../CartWidget/CartWidget";
import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

export default function Header () {
    const { cart } = useContext(CartContext)
    const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0)
    return (
       
           <header id="header" className="flex justify-between h-16 px-8 pt-4 shadow-md item-center bg-slate-200">
            <p className="text-3xl font-bold text-red-400"><Link to={"/"}>TodoModa</Link></p>
             <NavBar />
            <CartWidget cart={cartCount} />
        </header>
      
    )
}