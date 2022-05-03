import Header from "./components/navBar/NavBar";



function App() {


  
  return (
    <div className="">
      <Header />
      <h1 id="catalogo" className="h-screen pt-8 text-3xl font-bold text-center underline bg-rose-200">
      Catalogo
    </h1>
    <footer  className="bg-black">
      <div id="contactanos" className="flex items-center justify-center text-white">Redes Sociales</div>
      <div className="flex items-center justify-center h-20 text-white ">Created by: Fabian Romano</div>
    </footer>
    </div>
  );
}

export default App;
