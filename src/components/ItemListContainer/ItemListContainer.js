import React from "react"
import Card from "../Card/Card"
import ItemList from "../ItemList/ItemList"
import { productos } from "../data/productos";


export default function ItemListContainer({greeting}){
    const [listaProd, setListaProd] = React.useState([])

    const task = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000)
    })
    task.then((result)=>{
        console.log(result)
    }
    )
    React.useEffect(()=>{
        task.then((res)=>setListaProd(res))
        // eslint-disable-next-line
    },[])
    return(
        <div className="bg-violet-500 flex flex-col justify-start items-center">
            <p className="text-xl font-semibold">Hola Como Estas: <span className="text-2xl font-bold text-green-400 cursor-pointer">{greeting}</span></p>
            <Card/>
            <div className="">
            <ItemList ListaProductos={listaProd}/>
            </div>
        </div>
    )
}