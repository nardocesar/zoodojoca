import {
	read
} from '../../firebase';

export default async (req, res) => {
	const { password } = JSON.parse(req.body);
	const pass = await read('userpass');

	const messages = {
		success: {
			status: 'VALID',
			message: 'Senha correta'
		},
		error: {
			status: 'INVALID',
			message: 'Senha incorreta. Tente novamente.'
		}
	};

	const response = password === pass ? messages.success : messages.error;
	
	return res.json(response)
}