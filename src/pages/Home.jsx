import Banner from "../components/Banner";
import Destaques from "../components/Destaques";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Ofertas from "../components/Ofertas";
import Produtos from "../components/Produtos";


const Home = () => {
    return ( 
         <>
    <Header/>
    <main>
    <Banner/>
    <Destaques/>
    <Produtos/>
    <Ofertas/>
    </main>
    <footer>
      <Footer/>
    </footer>
    </>
     );
}
 
export default Home;