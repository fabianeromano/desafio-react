import { Link } from "react-router-dom"

export default function NavCategory (){
    return (
        <div className=" bg-slate-400">
            <ul className="flex justify-center items-center py-1">
                <li className="text-xl font-semibold text-gray-800 mx-4"><Link to={"/category/remeras"}>Remeras</Link></li>
                <li className="text-xl font-semibold text-gray-800 mx-4"><Link to={"/category/buzos"}>Buzos</Link></li>
                <li className="text-xl font-semibold text-gray-800 mx-4"><Link to={"/category/camperas"}>Camperas</Link></li>
            </ul>
        </div>
    )
}