import ClipLoader from "react-spinners/ClipLoader";

const LoadingSpinner = ({ size }) => {
	return (
		<div className="d-flex justify-content-center align-items-center py-5">
			<ClipLoader size={size} color="#fff" />
		</div>
	);
};

export default LoadingSpinner;
