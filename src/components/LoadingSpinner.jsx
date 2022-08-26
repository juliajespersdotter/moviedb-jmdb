import RotateLoader from "react-spinners/RotateLoader";

const LoadingSpinner = () => {
	return (
		<div className="d-flex justify-content-center align-items-center py-5">
			<RotateLoader size={30} color="#fff" />
		</div>
	);
};

export default LoadingSpinner;
