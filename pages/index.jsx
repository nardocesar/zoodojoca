import React from "react";

export default function Home() {
	return (
		<React.Fragment>
			<h1 className="titulo">Zoológico do Joaquim</h1>
			<main className="loginBox">
				<form action="">
					<input
						type="password"
						name="password"
						id="pass"
						name="password"
						required
						placeholder="Senha"
						className="caixaSenha"
					/>
					<button className="button">ENTRAR</button>
				</form>
			</main>
			<img
				className="animaisEntrada"
				src="https://firebasestorage.googleapis.com/v0/b/zoo-do-joca.appspot.com/o/OBJECTS.png?alt=media&token=52c7955d-e91f-4c5a-bba9-e11298abf023"
			></img>
		</React.Fragment>
	);
}
