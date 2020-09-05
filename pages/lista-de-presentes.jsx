import React, { useState, useEffect } from "react";
import fetch from "node-fetch";
import { useRouter } from "next/router";

import { usePopup, useItem } from "../hooks";

import ListItem from "../components/item";
import Popup from "../components/popup";

const ListaDePresentesPage = ({ data, base_url }) => {
	const router = useRouter();
	const [open, setOpen] = usePopup();
	const [item, setItem] = useItem();

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
				{data
					.sort((a, b) => {
						if (a.nome > b.nome) return 1;
						if (a.nome < b.nome) return -1;

						return 0;
					})
					.map((item, index) => {
						return (
							<ListItem
								item={item}
								key={index}
								openPopup={setOpen}
								setItem={setItem}
							/>
						);
					})}
			</main>

			{open ? (
				<Popup base_url={base_url} item={item} openPopup={setOpen} />
			) : null}
		</>
	);
};

export async function getStaticProps() {
	const request = await fetch(`${process.env.BASE_URL}/api/presentes`);
	const data = await request.json();
	const base_url = process.env.BASE_URL;

	return {
		props: {
			data,
			base_url,
		},
	};
}

export default ListaDePresentesPage;
