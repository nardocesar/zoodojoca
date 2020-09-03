import React, { useState } from "react";

const ListItem = ({ item }) => {
	const [colapsed, setColapsed] = useState(true);
	const [send, setSend] = useState(true);

	return (
		<div className={colapsed ? "retanguloDoItem" : "retanguloDoItem expanded"}>
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
							<p className="valorDoItem">Valor Aproximado: R$ {item.preco}</p>
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
							<p className="valorDoItem">Valor Aproximado: R$ {item.preco}</p>
							<a href={item.link} target="_blank">
								{item.link}
							</a>
							<a
								href={`https://app.picpay.com/user/nardocesar/${item.preco}`}
								target="_blank"
							>
								Mandar R${item.preco} pelo Picpay
							</a>
						</div>
					</div>

					<div className="descricaoDoItem">
						<p>{item?.descricao}</p>
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
								Vou encontrar os papais e entregar
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
									combinarem.
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
};

export default ListItem;
