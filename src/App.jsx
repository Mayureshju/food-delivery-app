import "./App.css";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Error from "./pages/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Home from "./pages/Home";
import MainHeader from "./pages/MainHeader";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainHeader />}>
        <Route index element={<Home/>}/>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="*" element={<Error />} />
          <Route path="/restaurant/:id" element={<RestaurantMenu />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
