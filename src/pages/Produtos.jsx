import Produto from "../components/Produto";

const Produtos = () => {
    return ( 
        <div className="xl:px-[100px] xl:pt-[40px] xl:pb-[140px]">
            {/* {Ordenação:} */}
        <div className="flex justify-between">
            <h6><strong>Resultados para “Tênis”</strong> - 389 produtos</h6>
            <div className="leading-[60px] flex items-center px-4 border border-grafite rounded">
                <strong>Ordenar por:</strong>
                <select>
                    <option>mais relevantes</option>
                </select>
            </div>
        </div>
            {/* {Filtros e Produtos} */}
        <div className="flex gap-[28px] items-start">
            {/* {Filtros} */}
            <div className="w-[300px] bg-white rounded p-[30px]">
                <h5 className="font-bold text-grafite">filtrar por</h5>
                <div className="h-[1px] bg-cinza-claro my-[20px]"></div>
                <h6 className="mb-[10px] font-bold text-grafite">Marca</h6>
                <div className="grid gap-[10px]">
                    <label className="flex gap-[10px] items-center">
                        <input className="w-[22px] h-[22px] accent-rosa" type="checkbox" />
                        Adidas
                    </label>
                    <label className="flex gap-[10px] items-center">
                        <input className="w-[22px] h-[22px] accent-rosa" type="checkbox" />
                        Balenciaga
                    </label>
                    <label className="flex gap-[10px] items-center">
                        <input className="w-[22px] h-[22px] accent-rosa" type="checkbox" />
                        Nike
                    </label>
                    <label className="flex gap-[10px] items-center">
                        <input className="w-[22px] h-[22px] accent-rosa" type="checkbox" />
                        Puma
                    </label>
                </div>
                
                <h6 className="mb-[10px] font-bold text-grafite mt-4">Categoria</h6>
                <div className="grid gap-[10px]">
                    <label className="flex gap-[10px] items-center">
                        <input className="w-[22px] h-[22px] accent-rosa" type="checkbox" />
                        Esporte e Lazer
                    </label>
                    <label className="flex gap-[10px] items-center">
                        <input className="w-[22px] h-[22px] accent-rosa" type="checkbox" />
                        Casual
                    </label>
                    <label className="flex gap-[10px] items-center">
                        <input className="w-[22px] h-[22px] accent-rosa" type="checkbox" />
                        Utilitário
                    </label>
                    <label className="flex gap-[10px] items-center">
                        <input className="w-[22px] h-[22px] accent-rosa" type="checkbox" />
                        Corrida
                    </label>
                </div>

                <h6 className="mb-[10px] font-bold text-grafite mt-4">Gênero</h6>
                <div className="grid gap-[10px]">
                    <label className="flex gap-[10px] items-center">
                        <input className="w-[22px] h-[22px] accent-rosa" type="checkbox" />
                        Masculino
                    </label>
                    <label className="flex gap-[10px] items-center">
                        <input className="w-[22px] h-[22px] accent-rosa" type="checkbox" />
                        Feminino
                    </label>
                    <label className="flex gap-[10px] items-center">
                        <input className="w-[22px] h-[22px] accent-rosa" type="checkbox" />
                        Unissex
                    </label>
                </div>

                <h6 className="mb-[10px] font-bold text-grafite mt-4">Estado</h6>
                <div className="grid gap-[10px]">
                    <label className="flex gap-[10px] items-center">
                        <input className="w-[22px] h-[22px] accent-rosa" type="radio" />
                        Novo
                    </label>
                    <label className="flex gap-[10px] items-center">
                        <input className="w-[22px] h-[22px] accent-rosa" type="radio" />
                        Usado
                    </label>
                   
                </div>
            </div>
            {/* {produtos} */}
            <div className="grid grid-cols-3 gap-[14px]">
                <Produto/>
                <Produto/>
                <Produto/>
                <Produto/>
                <Produto/>
                <Produto/>
              
            </div>
        </div>
        </div>
     );
}
 
export default Produtos;