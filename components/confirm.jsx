import React from "react";

const Confirm = ({ openPopup, closePopup }) => {
	return (
		<div className="overflow">
			<div className="caixaDoForm">
				<h3>Tudo certo para dar esse presentinho?</h3>
				<p>
					Se conseguiu comprar, pode confirmar! Se não conseguiu, não tem
					problema, clique em voltar!
				</p>
				<div className="buttons">
					<button className="botaoAindaNao" onClick={() => closePopup(false)}>
						Ainda não, voltar
					</button>
					<button onClick={() => openPopup(true)} className="botaoDeixaEsse">
						Tudo certo!
					</button>
				</div>
			</div>
		</div>
	);
};

export default Confirm;
