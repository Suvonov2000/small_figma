import Category from "./components/category";
import Flayer from "./components/flayer";
import Navbar from "./components/navbar";
import Sales from "./components/Sales";
import Best_selling from "./components/best_selling";
import Products from "./components/products";

function App() {
  return (
    <div>
      <Navbar />
      <Flayer />
      <Sales />
      <Category />
      <Best_selling />
      <Products />
    </div>
  );
}

export default App;
