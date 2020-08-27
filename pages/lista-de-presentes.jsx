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
					const [send, setSend] = useState(true);

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
												Quero dar esse!
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
											<a href="#">https://amazon.com</a>
											<a href="#">https://picpay.com</a>
										</div>
									</div>

									<div className="descricaoDoItem">
										<p>Lorem ipsum dolor sit amet</p>
										<div className="opcoesEntrega">
											<button
												className={send ? "opcao selecionado" : "opcao"}
												onClick={() => (send ? setSend(false) : setSend(true))}
											>
												Vou mandar para os papais
											</button>
											<button
												className={send ? "opcao" : "opcao selecionado"}
												onClick={() => (send ? setSend(false) : setSend(true))}
											>
												Vou encontrar os papai e entregar
											</button>
										</div>
										<div className="descricaoEntrega">
											{send ? (
												<>
													<p>Oba! O endereço do papai e da mamãe é esse:</p>
													<p>
														Rua Ibitirama 2130, Apto 35A
														<br />
														Vila Prudente - São Paulo/SP
														<br />
														CEP 03134-002
													</p>
												</>
											) : (
												<p>
													Ebaaa! Manda uma mensagem no WhatsApp deles para vocês
													combinarem. Estou esperando sua visita!
												</p>
											)}
										</div>
										<div className="botoesDescricao">
											<button
												className="botaoDarOutro"
												onClick={() =>
													colapsed ? setColapsed(false) : setColapsed(true)
												}
											>
												Vou escolher outro
											</button>
											<button
												className="botaoDarEsse"
												onClick={() =>
													colapsed ? setColapsed(false) : setColapsed(true)
												}
											>
												Deixa esse comigo!
											</button>
										</div>
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
