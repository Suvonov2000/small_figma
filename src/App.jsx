import Category from "./components/category";
import Flayer from "./components/flayer";
import Navbar from "./components/navbar";
import Sales from "./components/Sales";
import Best_selling from "./components/best_selling";
import Products from "./components/products";
import Ad from "./components/ad";
import Cart from "./components/cart";
import Footer from "./components/footer";
import Customs from "./components/customs";

function App() {
  return (
    <div>
      <Navbar />
      <Flayer />
      <Sales />
      <Category />
      <Best_selling />
      <Ad />
      <Products />
      <Customs />
      <Cart />
      <Footer />
    </div>
  );
}

export default App;
