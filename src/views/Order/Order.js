import { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom"
import Header from "../../components/Header/Header";
import NavCategory from "../../components/NavCategory/NavCategory";
import { getDoc, doc, getFirestore } from 'firebase/firestore';

export default function Order (){
    const navigate = useNavigate()
    const [order, setOrder] = useState(null)
    const {id} = useParams()
    
    useEffect(()=>{
        const db = getFirestore();

        const itemRef = doc(db, 'orders', id)
        getDoc(itemRef).then((snapshot) => {
          if(snapshot.exists()){
            setOrder(
                {
                  id: snapshot.id,
                  ...snapshot.data()
                }
              )
          }
        })
    })
    
    return (
         <div> 
            <Header />
            <NavCategory />
            {order &&
            <>
            <h1>Orden - ID: {id}</h1>
            <p>Nombre: {order.buyer.name}</p>
            <p>Teléfono: {order.buyer.phone}</p>
            <p>Email: {order.buyer.email}</p>
            <p>Total: $ {order.total}</p>
            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                {order.items.map(item=>(
                    <tr key={item.id}>
                        <td>{item.title}</td>
                        <td>{item.quantity}</td>
                        <td>$ {item.price}</td>
                        <td>$ {item.quantity * item.price}</td>
                    </tr>
                ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td>TOTAL</td>
                        <td>{order.items.reduce((acc, item) =>  acc + (item.quantity),0)}</td>
                        <td></td>
                        <td>$ {order.items.reduce((acc, item) =>  acc + (item.quantity * item.price),0)}</td>
                    </tr>
                </tfoot>
            </table>
            </>}
         </div>
    )
}