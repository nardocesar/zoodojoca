import {
	create
} from '../../firebase';

export default async (req, res) => {

	const {
		body
	} = req;

	try {
		const data = await create('presentes', body);
		res.json(data);
	} catch (error) {
		throw new Error(error);
	}

}