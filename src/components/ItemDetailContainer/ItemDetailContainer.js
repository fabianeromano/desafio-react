import React from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
//import { productos } from "../data/productos";
import Footer from "../../components/Footer/Footer"
import { doc, getDoc, getFirestore } from 'firebase/firestore'

export default function ItemDetailContainer({id}){
    const [item, setItem] = React.useState(null)

    React.useEffect(()=>{
        const db = getFirestore();
        console.log(id)

        const itemRef = doc(db, 'items', id)
        getDoc(itemRef).then((snapshot) => {
          if(snapshot.exists()){
            setItem(
                {
                  id: snapshot.id,
                  ...snapshot.data()
                }
              )
          }
        })
    },[id])


    return(
<div className="">
    <ItemDetail item={item} />
    <Footer />
</div>

    )
}