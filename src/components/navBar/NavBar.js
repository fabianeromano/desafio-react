import CartWidget from "../CartWidget/CartWidget";

export default function NavBar() {
    
    return(
        <header id="header" className="flex justify-between h-16 px-8 pt-4 shadow-md item-center bg-slate-200">
            <div><p className="text-3xl font-bold text-green-400">TodoModa</p></div>
             <div> 
               <ul className="flex justify-center item-center">
                   <li className="px-2 text-2xl font-semibold rounded cursor-pointer hover:text-green-400" >Home</li>
                    <li className="px-2 text-2xl font-semibold rounded cursor-pointer hover:text-green-400" >Catalogo</li>
                    <li className="px-2 text-2xl font-semibold rounded cursor-pointer hover:text-green-400" >Contactanos</li> 
                 </ul>  
                                  
            </div>
                <CartWidget cart={0} />
        </header>
    );
}