import Header from "../../components/Header/Header";
import NavCategory from "../../components/NavCategory/NavCategory";
import { useParams } from "react-router-dom";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";

export default function Category () {
    const {categoryId} = useParams();
    return (
        <>
            <Header />
            <NavCategory />
            <ItemListContainer categoryId={categoryId} />
        </>
    )
}