import Banner from "../components/Banner";
import Destaques from "../components/Destaques";
import Ofertas from "../components/Ofertas";
import Produtos from "../components/Produtos";

const Home = () => {
  return (
    <>
      <main>
        <Banner />
        <Destaques />
        <Produtos />
        <Ofertas />
      </main>
    </>
  );
};

export default Home;
