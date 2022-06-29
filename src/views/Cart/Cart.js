import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import Header from "../../components/Header/Header";
import NavCategory from "../../components/NavCategory/NavCategory";
import { addDoc, collection, getFirestore } from 'firebase/firestore';

export default function Cart (){
    const { cart, removeItem, clear } = useContext(CartContext)
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const navigate = useNavigate()
    
    const sendOrder = () => {
        const db = getFirestore();
        const order = {
            buyer: {name, phone, email},
            items: cart.map(prod => ({ id: prod.id, title: prod.title, price: prod.price, quantity: prod.quantity })),
            date: new Date(),
            total: cart.reduce((acc, item) => acc + (item.quantity * item.price), 0)
        }
        const orderCollection = collection(db, 'orders');
        addDoc(orderCollection, order).then(({id}) => {
            clear()
            navigate(`/order/${id}`)
        })
    }


    const db = getFirestore();

    if(cart.length === 0)
        return (
         <div> 
            <Header />
            <NavCategory />  
            <div className="flex flex-col items-center justify-center">
                 <p className="text-2xl font-bold">No hay items</p>
                 <button onClick={() => navigate('/')} className="px-1 text-white rounded-md bg-slate-600">Volver al catálogo</button>
            </div>
                
         </div>
        )
    return (
         <div> 
            <Header />
            <NavCategory />
            <section className="flex flex-col items-center justify-center">
            <table className="w-1/2 mx-auto table-auto my-14" >
                <thead className="bg-slate-200">
                    <tr className="text-center">
                        <th>Item</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th>Subtotal</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                {cart.map(item=>(
                    <tr key={item.id}>
                        <td>{item.title}</td>
                        <td>{item.quantity}</td>
                        <td>$ {item.price}</td>
                        <td>$ {item.quantity * item.price}</td>
                        <td><button onClick={() => removeItem(item.id)} className="px-1 bg-red-400 rounded-md">Eliminar</button></td>
                    </tr>
                ))}
                </tbody>
                <tfoot>
                    <tr className="text-center bg-slate-200">
                        <td>TOTAL</td>
                        <td>{cart.reduce((acc, item) =>  acc + (item.quantity),0)}</td>
                        <td></td>
                        <td>$ {cart.reduce((acc, item) =>  acc + (item.quantity * item.price),0)}</td>
                    </tr>
                </tfoot>
            </table>
             <div className="mx-auto text-lg font-semibold">
                <label htmlFor="name">Nombre: </label>
                <input name='name' type="text" placeholder="Ingrese su nombre" value={name} onChange={(e) => setName(e.target.value)} />
                <label htmlFor="phone">Teléfono: </label>
                <input name='phone' type="tel" placeholder="Ingrese su teléfono" value={phone} onChange={(e) => setPhone(e.target.value)} pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>
                <label htmlFor="email">Email: </label>
                <input name='email' type="email" placeholder="Ingrese su email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <button disabled={name === '' && email === '' && phone === ''} onClick={sendOrder} className="px-1 text-white rounded-md bg-slate-600">Finalizar Compra</button>
             </div>
            </section>
         </div>
    )
}