import ProductList from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.actions";

const Homepage = async () => {
  const lastestProducts = await getLatestProducts();
  return (
    <ProductList data={lastestProducts} title="Newest Arrival" limit={4} />
  );
};

export default Homepage;
