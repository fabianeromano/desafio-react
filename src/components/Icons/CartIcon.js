import { Icon } from "@iconify/react"

export default function CartIcon (){
    return(
        <div className="flex items-center justify-center w-10 h-10 bg-gray-600 rounded-md">
            <Icon className="w-8 h-8 text-white" icon="ic:baseline-shopping-cart" />
        </div>
    )
}