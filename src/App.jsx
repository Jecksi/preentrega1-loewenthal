import ItemListContainer from "./components/NavBar/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from "./components/NavBar/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting={"Dolce Incanto"} />}
          />
          <Route
            path="/category/:idCategory"
            element={<ItemListContainer greeting={"Dolce Incanto"} />}
          />
          <Route
            path="/detail/:idProduct"
            element={<ItemDetailContainer greeting={"Dolce Incanto"} />}
          />
        </Routes>
        <ItemDetailContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
