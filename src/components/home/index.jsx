import Category from "./category";
import Flayer from "./flayer";

import Sales from "./Sales";
import Best_selling from "./best_selling";
import Products from "./products";
import Ad from "./ad";
import Cart from "./cart";

import Customs from "./customs";

function Home() {
  return (
    <div>
      <Flayer />
      <Sales />
      <Category />
      <Best_selling />
      <Ad />
      <Products />
      <Customs />
      <Cart />
    </div>
  );
}

export default Home;
