import {
	useState
} from 'react';

const useItem = () => {
	const [item, setItem] = useState(null);
	return [item, setItem];
}

export default useItem;