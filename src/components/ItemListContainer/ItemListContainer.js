import React from "react"
import ItemList from "../ItemList/ItemList"
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'

export default function ItemListContainer({greeting, categoryId}){
    const [listaProd, setListaProd] = React.useState([]);

    React.useEffect(() => {
        const db = getFirestore();        
        const q = categoryId ? query(
          collection(db, 'items'),
          where('category', '==', categoryId)
        ) : query(
          collection(db, 'items')
        )
        getDocs(q).then((snapshot) => {
          if(snapshot.size === 0){
            console.log('No results')
          }
          setListaProd(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data()
            }))
          )
        })
       
      },[categoryId])

    return(
        <div className="flex flex-col items-center justify-start bg-violet-500">
            <div>
            <ItemList ListaProductos={listaProd}/>
            </div>
        </div>
    )
}