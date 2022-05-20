import React from "react"
import ItemList from "../ItemList/ItemList"
import { productos } from "../data/productos";


export default function ItemListContainer({greeting, categoryId}){
    const [listaProd, setListaProd] = React.useState([]);

    React.useEffect(() => {
        
        if(categoryId){
          setListaProd(productos.filter(listaProd => listaProd.category_id === +categoryId));
        }
        else{
          setListaProd(productos);
        }
       
      },[categoryId])

    return(
        <div className="flex flex-col items-center justify-start bg-violet-500">
            <p className="text-xl font-semibold">Hola Como Estas: <span className="text-2xl font-bold text-green-400 cursor-pointer">{greeting}</span></p>

            <div className="">
            <ItemList ListaProductos={listaProd}/>
            </div>
        </div>
    )
}