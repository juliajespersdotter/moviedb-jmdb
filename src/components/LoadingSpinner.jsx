import RotateLoader from "react-spinners/RotateLoader";

const LoadingSpinner = ({ size }) => {
	return (
		<div className="d-flex justify-content-center align-items-center py-5">
			<RotateLoader size={size} color="#fff" />
		</div>
	);
};

export default LoadingSpinner;
