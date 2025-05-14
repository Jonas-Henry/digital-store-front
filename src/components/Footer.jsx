import logoFooter from "../assets/logofooter.png";

const Footer = () => {
    return ( 
            <footer>
        <div className="rodape">
            <div className="conteudo">
                <img src={logoFooter} alt="Digial Store"/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                <div className="redes">
                    <a href=""><box-icon type='logo' name='facebook'></box-icon></a>
                    <a href=""><box-icon name='instagram' type='logo' ></box-icon></a>
                    <a href=""><box-icon name='twitter' type='logo' ></box-icon></a>
                </div>
            </div>
            <div className="sitemap">
                <div>
                    <h5>Informação</h5>
                    <a href="">Sobre Drip Store</a>
                    <a href="">Segurança</a>
                    <a href="">Wishlist</a>
                    <a href="">Blog</a>
                    <a href="">Trabalhe conosco</a>
                    <a href="">Meus Pedidos</a>
                </div>
                <div>
                    <h5>Categorias</h5>
                    <a href="">Camisetas</a>
                    <a href="">Calças</a>
                    <a href="">Bonés</a>
                    <a href="">Headphones</a>
                    <a href="">Tênis</a>
                </div>
                <div>
                    <h5>Contato</h5>
                    <a href="">
                        <address>
                            Av. Santos Dumont, 1510, - 1º andar, Aldeota, Fortaleza-CE 60150-161
                        </address>
                    </a>
                    <a href="Tel: 8530513411">(85) 3051-3411</a>
                </div>
            </div>
        </div>
        <h6>&copy; 2025 Jonas Pereira</h6>
    </footer>
     );
}
 
export default Footer;