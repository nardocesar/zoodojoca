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
		await update('presentes', id, parsedBody)
	} catch (error) {
		res.status(500).json(error);
	}

	res.status(200).json({
		success: true
	});
}