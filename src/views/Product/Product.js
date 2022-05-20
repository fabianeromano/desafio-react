import ItemDetailContainer from "../../components/ItemDetailContainer/ItemDetailContainer";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import NavCategory from "../../components/NavCategory/NavCategory";

export default function Product (){
    const {productId} = useParams()
    return (
        <>
        <Header />
        <NavCategory />   
        <ItemDetailContainer productId={+productId} />
        </>
    )
}