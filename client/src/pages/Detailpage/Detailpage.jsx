import { useParams } from "react-router-dom";

const Detailpage = () => {
	const { id } = useParams();

	return <p>{id}</p>;
};
export default Detailpage;
