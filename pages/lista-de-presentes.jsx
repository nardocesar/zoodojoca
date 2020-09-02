import React, { useState } from "react";
import fetch from "node-fetch";

const ListaDePresentesPage = ({ listaDePresentes }) => {
	const items = listaDePresentes || new Array(10).fill(1);

	return (
		<>
			<figure className="headerLista">
				<img src="header2.png" alt="Header do site" />
			</figure>
			<main className="container">
				{items
					.sort((a, b) => {
						if (a.nome > b.nome) return 1;
						if (a.nome < b.nome) return -1;

						return 0;
					})
					.map((item, index) => {
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
												<img src={item.imagem} />
											</figure>
										</div>
										<div className="caixaDoConteudo">
											<div className="itemDePresente">
												<p className="nomeDoItem">{item.nome}</p>
												<p className="valorDoItem">
													Valor Aproximado: R$ {item.preco}
												</p>
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
													<img src={item.imagem} />
												</figure>
											</div>
											<div className="tituloDoItem">
												<p className="nomeDoItem">{item.nome}</p>
												<p className="valorDoItem">
													Valor Aproximado: R$ {item.preco}
												</p>
												<a href={item.link} target="_blank">
													{item.link}
												</a>
												<a
													href={`https://picpay.com/nardocesar/${item.valor}`}
													target="_blank"
												>
													https://picpay.com/nardocesar
												</a>
											</div>
										</div>

										<div className="descricaoDoItem">
											<p>{item?.descricao}</p>
											<div className="opcoesEntrega">
												<button
													className={send ? "opcao selecionado" : "opcao"}
													onClick={() =>
														send ? setSend(false) : setSend(true)
													}
												>
													Vou mandar para os papais
												</button>
												<button
													className={send ? "opcao" : "opcao selecionado"}
													onClick={() =>
														send ? setSend(false) : setSend(true)
													}
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
														Ebaaa! Manda uma mensagem no WhatsApp deles para
														vocês combinarem. Estou esperando sua visita!
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

export async function getStaticProps({ req }) {
	const baseUrl = req
		? `${req.protocol}://${req.get("Host")}`
		: process.env.BASE_URL;

	const response = await fetch(`${baseUrl}/api/lista-de-presentes`);
	const text = await response.text();

	console.log(text);

	const listaDePresentes = JSON.parse(text);

	return {
		props: {
			listaDePresentes,
		},
	};
}

export default ListaDePresentesPage;
