import React from 'react';

const ListaDePresentesPage = () => {
    return (
        <>
            <figure className="headerLista">
                <img src="header.png" alt="Header do site" />
            </figure>
            <main className="container">
                <div className="retanguloDoItem">
                    <div className="caixaDaFoto">
                        <figure>
                            <img
                                src="fotosDosPresentes/banheirinha.jpg"
                            />
                        </figure>
                    </div>
                    <div className="caixaDoConteudo">
                        <div className="itemDePresente">
                            <p class="nomeDoItem">Banheirinha</p>
                            <p class="valorDoItem">Valor Aproximado: R$ 250,00</p>
                           
                        </div>
                        <div className="areaBotao">
                            <button className="botaoDarEsse">Deixa esse Comigo!</button>
                        </div>  
                    </div>
                </div>
            </main>
        </>
    );
};

export default ListaDePresentesPage;