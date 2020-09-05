import {
	read
} from '../../firebase';

export default async (req, res) => {
	res.set('Cache-Control', 'no-cache');
	const list = await read('presentes', 'lista');
	res.json(list);
}