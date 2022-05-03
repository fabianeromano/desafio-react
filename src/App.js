import Header from "./components/navBar/NavBar";

function App() {
  return (
    <div className="">
      <Header />
      <h1 id="catalogo" className="text-3xl text-center font-bold underline pt-8 h-screen bg-rose-200">
      Catalogo
    </h1>
    <footer  className="bg-black">
      <div id="contactanos" className="text-white flex justify-center items-center">Redes Sociales</div>
      <div className=" text-white flex justify-center items-center h-20">Created by: Fabian Romano</div>
    </footer>
    </div>
  );
}

export default App;
