
export default function Header() {
    let menuDrop=document.getElementById("dropdown")
    function dropdown(){
        if(menuDrop.classList.contains("hidden")){
            menuDrop.classList.remove("hidden");
            menuDrop.classList.add("flex");
        }else{
            menuDrop.classList.remove("flex");
            menuDrop.classList.add("hidden");
        }
    }
    
    return(
        <header id="header" className="flex justify-between h-16 px-8 pt-4 shadow-md bg-slate-900">
            <div><p className="text-2xl font-bold text-pink-300">TodoModa</p></div>
            
           <div className="flex flex-col item-center">
                <button id="btnMenu" className="w-32 bg-pink-300 rounded" onClick={dropdown}>Menu</button>
                <div  className="flex flex-col">
                    <div id="dropdown" className="flex-col hidden p-2 mt-1 text-sm bg-gray-200 rounded ">
                    <a className="px-2 py-1 rounded hover:bg-pink-200" href="#header">Home</a>
                    <a className="px-2 py-1 rounded hover:bg-pink-200" href="#catalogo">Catalogo</a>
                    <a className="px-2 py-1 rounded hover:bg-pink-200" href="#contactanos">Contactanos</a>
                </div>
                </div>
                
                                
            </div>
                
        </header>
    );
}