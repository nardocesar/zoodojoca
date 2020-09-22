import {
	useState
} from 'react';

const useConfirm = () => {
	const [open, setOpen] = useState(false);
	return [open, setOpen];
}

export default useConfirm;