import ItemCount from "../ItemCount/ItemCount";


export default function Card(){

    const ImgCard=()=>{
        return(
        <div className="h-60 w-48 overflow-hidden rounded-xl">
            <img className=" h-60 w-48 " src="https://www.pngitem.com/pimgs/m/114-1149906_sneakers-skate-shoe-nike-one-transparent-background-png.png" alt="Remera" />
        </div>)
    }
    const PrecioCard=()=>{
        return(
            <p className="text-2xl font-bold">$500</p>
        )
    }
    const StockCard=()=>{
        return(
            <p className="text-xl font-semibold">Stock: 5</p>
        )
    }


    return(
        <div className=" w-64 h-96 bg-white rounded-2xl flex flex-col justify-center items-center py-2">
             
        <ImgCard/>
        <PrecioCard />
        <StockCard />
        <ItemCount stock={5} initial={1}/>

        </div>
    )
}