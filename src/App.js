import "./assets/css/media.css";
import "./assets/css/style.css";
import "./assets/css/font-awesome.min.css"
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import ProductPage from "./pages/product";
import Header from "./components/heaers/Header";

function App() {

  return (
    <>
    
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/products" element={<ProductPage />} />

      </Routes>


    </>
  );
}

export default App;
