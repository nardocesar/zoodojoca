import {
	useState,
	useEffect
} from 'react';

export default () => {
	const [logged, setLogged] = useState('');

	setLogged(sessionStorage.getItem("loggedIn") || "NO");
}