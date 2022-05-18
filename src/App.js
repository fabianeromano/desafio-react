import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Footer from "./components/Footer/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";


function App() {
  return (
    <div className="app">
         <NavBar />
        <ItemListContainer greeting={"Fabian Romano"} />
        <ItemDetailContainer />
        <Footer />
    </div>
  )
}
export default App;
