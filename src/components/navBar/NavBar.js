import { Link } from "react-router-dom";

export default function NavBar() {
    
    return(
    
             <div> 
               <ul className="flex justify-center item-center">
                   <li className="px-2 text-2xl font-semibold rounded cursor-pointer hover:text-green-400" ><Link to={"/"}>Home</Link></li>
                    <li className="px-2 text-2xl font-semibold rounded cursor-pointer hover:text-green-400" ><Link to={"/category"}>Catalogo</Link></li>
                 </ul>  
                                  
            </div>
    );
}