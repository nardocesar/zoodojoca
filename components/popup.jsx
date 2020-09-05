import React, { useState } from "react";
import fetch from "node-fetch";

const Popup = ({ item, openPopup, base_url }) => {
	const [name, setName] = useState("");
	const [message, setMessage] = useState(null);
	const [loading, setLoading] = useState(false);

	const enviar = async () => {
		setLoading(true);

		try {
			await fetch(`${base_url}/api/update/${item.id}`, {
				method: "put",
				body: JSON.stringify({ ...item, ganho: true, dadopor: name }),
			});

			setMessage("Obrigado pelo presentinho!");
			setLoading(false);
		} catch (error) {
			setMessage("Deu alguma coisa errada :(");
			setLoading(false);
		}
	};

	return (
		<div className="overflow">
			<div className="caixaDoForm">
				{message ? (
					<>
						<p className="thankYouMessage">{message}</p>
						<button
							className="botaoFechar"
							onClick={() => document.location.reload()}
						>
							Fechar
						</button>
					</>
				) : (
					<>
						<h3>Seu nome aqui</h3>
						<input
							type="text"
							className="caixaSenha popup"
							onChange={(event) => setName(event.target.value)}
						/>
						<div className="buttons">
							<button
								className="botaoDarOutro"
								onClick={() => openPopup(false)}
							>
								Vou escolher outro
							</button>
							<button
								className="botaoDeixaEsse"
								onClick={enviar}
								disabled={loading}
							>
								<i
									className="loader"
									style={{ display: loading ? "inline-block" : "none" }}
								></i>
								Confirmo!
							</button>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default Popup;
