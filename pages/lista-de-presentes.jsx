import React from 'react';

const items = new Array(10);

const ListaDePresentesPage = () => {
    return (
        <>
            <figure className="headerLista">
                <img src="header2.png" alt="Header do site" />
            </figure>
            <main className="container">
                {
                    items.fill(1).map(() => (
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
                                    <p className="nomeDoItem">Banheirinha</p>
                                    <p className="valorDoItem">Valor Aproximado: R$ 250,00</p>

                                </div>
                                <div className="areaBotao">
                                    <button className="botaoDarEsse">Deixa esse Comigo!</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </main>
        </>
    );
};

export default ListaDePresentesPage;