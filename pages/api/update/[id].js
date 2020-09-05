import {
	update,
	read
} from '../../../firebase';

export default async (req, res) => {
	const {
		body,
		query: {
			id
		}
	} = req;

	try {
		const response = await update('presentes', id, JSON.parse(body));
		res.status(200).json(response);
	} catch (error) {
		res.status(500).json(error);
	}
}