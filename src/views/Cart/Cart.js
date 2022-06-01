import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import Header from "../../components/Header/Header";
import NavCategory from "../../components/NavCategory/NavCategory";

export default function Cart (){
const {cart} = useContext(CartContext)
    return (
         <div>
             
            <Header />
            <NavCategory />  
             {cart.map(item=>(
                <p key={item.id}>{item.title} - {item.quantity}</p>
             ))}

         </div>
    )
}