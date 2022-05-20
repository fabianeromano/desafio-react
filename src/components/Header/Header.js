import CartWidget from "../CartWidget/CartWidget";
import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";

export default function Header () {
    return (
       
           <header id="header" className="flex justify-between h-16 px-8 pt-4 shadow-md item-center bg-slate-200">
            <p className="text-3xl font-bold text-green-400"><Link to={"/"}>TodoModa</Link></p>
             <NavBar />
            <CartWidget cart={0} />
        </header>
      
    )
}