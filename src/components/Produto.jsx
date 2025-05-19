import tenis from "../assets/tenis3.png";

const Produto = () => {
    return ( 
        <div>
            <div className="bg-white rounded shadow-xl relative flex justify-center items-center">
                <span className="absolute top-5 left-5 leading-[32px] bg-verde text-[14px] uppercase font-bold px-4 rounded-3xl">30% OFF</span>
                <img src={tenis} alt="" />
            </div>
            <div className="mt-[18px]">
                <h6 className="text-[12px] font-bold text-cinza">Tênis</h6>
                <h4 className="text-grafite text-[24px]">K-Swiss v8 - Masculino</h4>
                <h4 className="text-[24px] font-bold"><del className="text-cinza font-light">$200</del>$100</h4>
            </div>
        </div>
     );
}
 
export default Produto;