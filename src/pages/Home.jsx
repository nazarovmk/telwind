import ProductsList from "../components/ProductsList";
import { UseFetch } from "../hooks/UseFetch";
function Home() {
  const { data, isPending, error } = UseFetch(
    "https://dummyjson.com/products?limit=194"
  );
  console.log(data);
  return (
    <section className="main-container">
      <h2 className="text-4xl font-bold mb-10 flex justify-center">Product</h2>
      {data && <ProductsList products={data.products} />}
    </section>
  );
}

export default Home;
