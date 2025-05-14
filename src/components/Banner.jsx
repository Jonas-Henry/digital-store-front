import sapato from "../assets/tenis.png";
import pontinho from "../assets/pontinho.png";


const Banner = () => {
    return ( 
        <section id="banner">
            <div className="conteudo">
                <h6>Melhores ofertas personalizadas</h6>
                <h2>Queima de<br/>estoque Nike 🔥</h2>
                <p>Consequat culpa exercitation mollit nisi excepteur do<br/>do tempor laboris eiusmod irure consectetur.</p>
                <a href="" className="btn">Ver Ofertas</a>
            </div>
            <img src={sapato} alt="" className="tenis"/>
            <img src={pontinho} alt="" className="detalhe"/>
        </section>
     );
}
 
export default Banner;