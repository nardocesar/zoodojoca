import {
	useState
} from 'react';

const usePopup = () => {
	const [open, setOpen] = useState(false);
	return [open, setOpen];
}

export default usePopup;