import ItemCount from "../ItemCount/ItemCount"
export default function Item({producto}){

 const ImgCard=()=>{
            return(
            <div className="h-60 w-48 overflow-hidden rounded-xl">
                <img className=" h-60 w-48 " src={producto.image} alt= {producto.title} />
            </div>)
        }
const TitleCard=()=>{
    return(
        <p className="text-2xl font-bold">{producto.title}</p>
    )
}

        const PrecioCard=()=>{
            return(
                <p className="text-2xl font-bold">${producto.price}</p>
            )
        }
        const StockCard=()=>{
            return(
                <p className="text-xl font-semibold">Stock: {producto.stock}</p>
            )
        }

    return(
        <div className=" w-64 h-96 bg-white rounded-2xl flex flex-col justify-center items-center py-2 m-4">
             
        <ImgCard/>
        <TitleCard/>
        <PrecioCard />
        <StockCard />
        <ItemCount stock={producto.stock} initial={1}/>

        </div>

    )
}