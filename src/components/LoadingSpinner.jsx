import ClipLoader from "react-spinners/ClipLoader";

const LoadingSpinner = () => {
	return (
		<div className="d-flex justify-content-center align-items-center py-5">
			<ClipLoader size={30} color="#fff" />
		</div>
	);
};

export default LoadingSpinner;
