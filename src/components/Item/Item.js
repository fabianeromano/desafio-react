import { useNavigate } from "react-router-dom"
export default function Item({producto}){
    
    const navigate=useNavigate();
    

 const ImgCard=()=>{
            return(
            <div className="w-48 overflow-hidden h-60 rounded-xl">
                <img className="w-48 h-60" src={producto.image} alt= {producto.title} />
            </div>)
        }
const TitleCard=()=>{
    return(
        <p className="text-xl font-bold text-center">{producto.title}</p>
    )
}

      

    return(
        <div className="flex flex-col items-center justify-center w-64 py-2 m-4 bg-white h-96 rounded-2xl">
             
        <ImgCard/>
        <TitleCard/>
        <button className ="px-4 py-1 my-2 text-xl font-semibold text-white rounded-2xl bg-slate-600" onClick={()=>navigate(`/Detail/${producto.id}`)}>Ver Detalle</button>
        </div>

    )
}