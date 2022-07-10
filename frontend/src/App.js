import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Foooter from "./components/Footer";
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen />} ></Route>
            <Route path="/product/:id" element={<ProductScreen />}></Route>
            <Route path="/cart" element={<CartScreen />}></Route>
            <Route path="/cart/:id" element={<CartScreen />}></Route>
          </Routes>
        </Container>
      </main>
      <Foooter />
    </BrowserRouter>
  );
}

export default App;
