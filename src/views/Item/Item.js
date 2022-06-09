import { useParams } from "react-router-dom";
import ItemDetailContainer from "../../components/ItemDetailContainer/ItemDetailContainer"
import Header from "../../components/Header/Header";
import NavCategory from "../../components/NavCategory/NavCategory";

export default function Item(){

    const {id} = useParams()

    return (
        <>
            <Header />
            <NavCategory />  
            <ItemDetailContainer id={id} />
        </>
    )
}