import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import Header from "../../components/Header/Header";
import NavCategory from "../../components/NavCategory/NavCategory";

export default function Cart (){
    const { cart, removeItem } = useContext(CartContext)
    const navigate = useNavigate()
    if(cart.length === 0)
        return (
         <div> 
            <Header />
            <NavCategory />  
            <p>No hay items</p>
            <button onClick={() => navigate('/')}>Volver al catálogo</button>
         </div>
        )
    return (
         <div> 
            <Header />
            <NavCategory />  
            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th>Subtotal</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                {cart.map(item=>(
                    <tr key={item.id}>
                        <td>{item.title}</td>
                        <td>{item.quantity}</td>
                        <td>$ {item.price}</td>
                        <td>$ {item.quantity * item.price}</td>
                        <td><button onClick={() => removeItem(item.id)}>Eliminar</button></td>
                    </tr>
                ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td>TOTAL</td>
                        <td>{cart.reduce((acc, item) =>  acc + (item.quantity),0)}</td>
                        <td></td>
                        <td>$ {cart.reduce((acc, item) =>  acc + (item.quantity * item.price),0)}</td>
                    </tr>
                </tfoot>
            </table>
         </div>
    )
}