import ItemListConstainer from "./components/NavBar/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListConstainer greeting={"Bienvenido a mi ecommerce"} />
    </div>
  );
}

export default App;
