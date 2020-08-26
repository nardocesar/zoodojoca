import React, { useState } from "react";

const items = new Array(10);

const ListaDePresentesPage = () => {
	return (
		<>
			<figure className="headerLista">
				<img src="header2.png" alt="Header do site" />
			</figure>
			<main className="container">
				{items.fill(1).map((_, index) => {
					const [colapsed, setColapsed] = useState(true);

					return (
						<div
							key={index}
							className={
								colapsed ? "retanguloDoItem" : "retanguloDoItem expanded"
							}
						>
							{colapsed ? (
								// FECHADO
								<>
									<div className="caixaDaFoto">
										<figure>
											<img src="fotosDosPresentes/banheirinha.jpg" />
										</figure>
									</div>
									<div className="caixaDoConteudo">
										<div className="itemDePresente">
											<p className="nomeDoItem">Banheirinha</p>
											<p className="valorDoItem">Valor Aproximado: R$ 250,00</p>
										</div>
										<div className="areaBotao">
											<button
												className="botaoDarEsse"
												onClick={() =>
													colapsed ? setColapsed(false) : setColapsed(true)
												}
											>
												Eu vou dar esse!
											</button>
										</div>
									</div>
								</>
							) : (
								// ABERTO
								<>
									<div className="headerDoItem">
										<div className="caixaDaFoto">
											<figure>
												<img src="fotosDosPresentes/banheirinha.jpg" />
											</figure>
										</div>
										<div className="tituloDoItem">
											<p className="nomeDoItem">Banheirinha</p>
											<p className="valorDoItem">Valor Aproximado: R$ 250,00</p>
										</div>
									</div>

									<div className="descricaoDoItem">
										<p>Lorem ipsum dolor sit amet</p>
										<button
											className="botaoDarEsse"
											onClick={() =>
												colapsed ? setColapsed(false) : setColapsed(true)
											}
										>
											Deixa esse comigo!
										</button>
									</div>
								</>
							)}
						</div>
					);
				})}
			</main>
		</>
	);
};

export default ListaDePresentesPage;
