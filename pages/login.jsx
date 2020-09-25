import React, { useState } from "react";
import fetch from "node-fetch";
import { useRouter } from "next/router";

export default function Home({ base_url }) {
	const router = useRouter();
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	const setState = (event) => {
		setPassword(event.target.value);
	};

	const clearError = () => {
		setError("");
	};

	const postPass = async () => {
		const body = { password };

		const response = await fetch(`${base_url}/api/auth`, {
			method: "post",
			body: JSON.stringify(body),
		});

		const { message, status } = await response.json();

		return { message, status };
	};

	const enterSite = async () => {
		setLoading(true);
		const { message, status } = await postPass();

		setLoading(false);

		if (status === "VALID") {
			clearError();
			sessionStorage.setItem("loggedIn", "YES");
			router.push("/lista-de-presentes");
		} else {
			setError(message);
		}
	};

	return (
		<React.Fragment>
			<h1 className="titulo">Zoológico do Joaquim</h1>
			<main className="loginBox">
				<input
					type="password"
					name="password"
					id="pass"
					name="password"
					required
					placeholder="Senha"
					className="caixaSenha"
					value={password}
					onChange={setState}
				/>
				<button className="button" onClick={enterSite} disabled={loading}>
					<i
						className="loader"
						style={{ display: loading ? "inline-block" : "none" }}
					></i>
					ENTRAR
				</button>
				<p className="passError" style={{ display: error ? "block" : "none" }}>
					Senha incorreta. Tente novamente!
				</p>
			</main>
			<img
				className="animaisEntrada"
				src="https://firebasestorage.googleapis.com/v0/b/zoo-do-joca.appspot.com/o/OBJECTS.png?alt=media&token=52c7955d-e91f-4c5a-bba9-e11298abf023"
			></img>
		</React.Fragment>
	);
}

export async function getStaticProps() {
	const base_url = process.env.BASE_URL;

	return {
		props: {
			base_url,
		},
	};
}
