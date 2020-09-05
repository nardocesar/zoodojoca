import React from "react";

const Popup = ({ item, openPopup }) => {
	return (
		<div className="overflow">
			<div className="caixaDoForm">
				<h3>Seu nome aqui</h3>
				<input type="text" className="caixaSenha popup" />
				<div className="buttons">
					<button className="botaoDarOutro" onClick={() => openPopup(false)}>
						Vou escolher outro
					</button>
					<button className="botaoDeixaEsse">Confirmo!</button>
				</div>
			</div>
		</div>
	);
};

export default Popup;
