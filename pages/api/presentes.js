import {
	read
} from '../../firebase';

export default async (req, res) => {
	const list = await read('presentes', 'lista');
	res.json(list);
}