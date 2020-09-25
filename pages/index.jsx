import React, { useState, useEffect } from "react";
import fetch from "node-fetch";
import { useRouter } from "next/router";

import { usePopup, useConfirm, useItem } from "../hooks";

import ListItem from "../components/item";
import Popup from "../components/popup";
import Confirm from "../components/confirm";

const ListaDePresentesPage = ({ data, base_url }) => {
	const router = useRouter();
	const [openConfirm, setOpenConfirm] = useConfirm();
	const [openPopup, setOpenPopup] = usePopup();
	const [item, setItem] = useItem();

	const [logged, setLogged] = useState("");

	useEffect(() => {
		if (openPopup) setOpenConfirm(false);
	}, [openPopup]);

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
						.sort((a, b) => {
							if (a.ganho && !b.ganho) return 1;
							if (!a.ganho && b.ganho) return -1;
							if (a.ganho && b.ganho) return 0;
							if (!a.ganho && !b.ganho) return 0;
						})
						.map((item, index) => {
							return (
								<ListItem
									item={item}
									key={index}
									openPopup={setOpenConfirm}
									setItem={setItem}
								/>
							);
						})}
				</main>

				{openConfirm ? (
					<Confirm openPopup={setOpenPopup} closePopup={setOpenConfirm} />
				) : null}

				{openPopup ? (
					<Popup base_url={base_url} item={item} openPopup={setOpenPopup} />
				) : null}
			</>
		);
};

export async function getServerSideProps() {
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
