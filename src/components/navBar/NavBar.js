export default function Header() {
    return(
        <header id="header" className="flex justify-between px-8 bg-slate-900 items-center h-16 shadow-md">
            <div><p className="text-2xl font-bold text-pink-300">TodoModa</p></div>
                <ul className="flex">
                    <li className=" font-semibold text-xl underline text-pink-300"> <a href="#header">Home</a></li>
                    <li className=" font-semibold text-xl ml-6 text-white">
                    <a href="#catalogo">Catalogo</a>

                        
                    </li>
                    <li className=" font-semibold text-xl ml-6 text-white">
                    <a href="#contactanos">Contactanos</a>
                    </li>
                </ul>
        </header>
    );
}