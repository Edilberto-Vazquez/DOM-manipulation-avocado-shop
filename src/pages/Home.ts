import getData from "../utils/getData";
import ProductCard from "../components/product-card";

const Home = async () => {
  // call the api
  const baseUrl: string = "https://platzi-avo.vercel.app";
  const response = await getData(`${baseUrl}/api/avo`);
  // create a div node
  const fragment = document.createDocumentFragment();

  // get the pruducts node
  const productList = document.querySelector("#product-list");

  // create a product card and append to fragment
  await response.data.forEach((card: any) => {
    const productCard = new ProductCard(
      `${baseUrl}${card.image}`,
      card.name,
      card.price
    );
    fragment.append(productCard);
  });

  // append the fragment product node with all product cards
  productList?.append(fragment);
};

export default Home;
