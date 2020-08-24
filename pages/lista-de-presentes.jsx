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
                                src="https://via.placeholder.com/100"
                                alt="Nome do presente"
                            />
                        </figure>
                    </div>
                    <div className="caixaDoConteudo">
                        <p>Item de Presente</p>
                        <button className="botaoDarEsse">
                            Deixa esse Comigo!
                        </button>
                    </div>
                </div>
            </main>
        </>
    );
};

export default ListaDePresentesPage;