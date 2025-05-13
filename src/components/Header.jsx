import logo from "../assets/logo.png"
import lupa from "../assets/lupa.png"
import carrinho from "../assets/carrinho.png"

const Header = () => {
    return ( 
        <header>
        <div ClassName="topo">
            <div ClassName="logo">
                <img src={logo} alt="digital store logo"/>
                DIGITAL STORE
            </div>
            <div ClassName="buscador">
                <input type="text" placeholder="Pesquisar produto..."/>
                <img src={lupa} alt="lupa buscador"/>
            </div>
            <div ClassName="acoes">
                <a href="">Cadastre-se</a>
                <a href="" ClassName="btn">Entrar</a>
                <div ClassName="carrinho">
                    <img src={carrinho} alt="carrinho"/>
                    <span>2</span>
                </div>
            </div>
        </div>
        <nav>
            <a href="" ClassName="active">Home</a>
            <a href="">Produtos</a>
            <a href="">Categorias</a>
            <a href="">Meus Pedidos</a>
        </nav>
    </header>
     );
}
 
export default Header;