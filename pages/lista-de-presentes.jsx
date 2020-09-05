import React, { useState, useEffect } from "react";
import fetch from "node-fetch";
import { useRouter } from "next/router";

import { usePopup } from "../hooks";

import ListItem from "../components/item";
import Popup from "../components/popup";

const ListaDePresentesPage = ({ listaDePresentes }) => {
	const router = useRouter();
	const [open, setOpen] = usePopup();
	const [logged, setLogged] = useState("");

	useEffect(() => {
		setLogged(sessionStorage.getItem("loggedIn") || "NO");

		if (logged === "NO") {
			router.push("/");
		}
	}, [logged]);

	return logged === "NO" ? (
		<p>Aguarde...</p>
	) : (
		<>
			<figure className="headerLista">
				<img src="header2.png" alt="Header do site" />
			</figure>
			<main className="container">
				{listaDePresentes
					.sort((a, b) => {
						if (a.nome > b.nome) return 1;
						if (a.nome < b.nome) return -1;

						return 0;
					})
					.map((item, index) => {
						return <ListItem item={item} key={index} openPopup={setOpen} />;
					})}
			</main>

			{open ? <Popup openPopup={setOpen} /> : null}
		</>
	);
};

export async function getStaticProps() {
	const request = await fetch(`${process.env.BASE_URL}/api/presentes`);
	const listaDePresentes = await request.json();

	return {
		props: {
			listaDePresentes,
		},
	};
}

export default ListaDePresentesPage;
