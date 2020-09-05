import {
	update
} from '../../../firebase';

export default async (req, res) => {
	const {
		body,
		query: {
			id
		}
	} = req;

	const parsedBody = JSON.parse(body);

	try {
		const response = await update('presentes', id, parsedBody);
		res.status(200).json(response);
	} catch (error) {
		res.status(500).json(error);
	}
}