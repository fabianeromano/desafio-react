import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className="">
       <NavBar />
        <ItemListContainer greeting={"Fabian Romano"} />
        <Footer />
    </div>
  )
}
export default App;
