import { Icon } from "@iconify/react"
import { useNavigate } from "react-router-dom"

export default function CartIcon (){
    const navigate = useNavigate()
    return(
        <div className="flex items-center justify-center w-10 h-10 bg-gray-600 rounded-md cursor-pointer" onClick={()=>navigate("/cart")}>
            <Icon className="w-8 h-8 text-white" icon="ic:baseline-shopping-cart" />
        </div>
    )
}