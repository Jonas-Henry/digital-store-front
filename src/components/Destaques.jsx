import camisa from "../assets/camisa.png";
import tenis2 from "../assets/tenis2.png";
import fone from "../assets/fone.png";
import iconShirt from "../assets/icon-shirt.svg";
import iconPants from "../assets/icon-pants.svg";
import iconHat from "../assets/icon-hat.svg";
import iconHeadphone from "../assets/icon-headphone.svg";
import iconShoes from "../assets/icon-shoes.svg";

const Destaques = () => {
    return ( 
         <section id="destaques">
            <div>
                <h3>Coleções em destaque</h3>
                <div className="colecoes">
                    <div>
                        <div className="conteudo">
                            <h6>30% off</h6>
                            <h2>Novo drop<br/>supreme</h2>
                            <a href="" className="btn inverso">Comprar</a>
                        </div>
                        <img src={camisa} alt="camisa"/>
                    </div>
                    <div>
                        <div className="conteudo">
                            <h6>30% off</h6>
                            <h2>Coleção<br/>Adidas</h2>
                            <a href="" className="btn inverso">Comprar</a>
                        </div>
                        <img src={tenis2} alt="tenis"/>
                    </div>
                    <div>
                        <div className="conteudo">
                            <h6>30% off</h6>
                            <h2>Novo<br/>Beats Bass</h2>
                            <a href="" className="btn inverso">Comprar</a>
                        </div>
                        <img src={fone} alt="fone"/>
                    </div>


                </div>
                <h3>Departamentos</h3>
                <div className="departamentos">
                    <div>
                        <div className="icon">
                            <img src={iconShirt} alt=""/>
                        </div>
                        Camisetas
                    </div>
                    <div>
                        <div className="icon">
                            <img src={iconPants} alt=""/>
                        </div>
                        Calças
                    </div>
                    <div>
                        <div className="icon">
                            <img src={iconHat} className="bone" alt=""/>
                        </div>
                        Bonés
                    </div>
                    <div>
                        <div className="icon">
                            <img src={iconHeadphone} alt=""/>
                        </div>
                        Headphones
                    </div>
                    <div>
                        <div className="icon">
                            <img src={iconShoes} alt=""/>
                        </div>
                        Tênis
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Destaques;