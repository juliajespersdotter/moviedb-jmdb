import { useEffect, useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const Search = ({ onSearch }) => {
	const [searchInput, setSearchInput] = useState("");
	const searchInputRef = useRef();

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!searchInput.length) {
			return;
		}

		onSearch(searchInput);
	};

	useEffect(() => {
		searchInputRef.current.focus();
	}, []);

	return (
		<Form onSubmit={handleSubmit}>
			<InputGroup className="mb-3">
				<Form.Control
					aria-label="Search"
					onChange={(e) => setSearchInput(e.target.value)}
					placeholder="Type in your search..."
					ref={searchInputRef}
					required
					type="text"
					value={searchInput}
				/>
				<Button
					variant="danger"
					type="submit"
					disabled={!searchInput.length}
				>
					Search
				</Button>
			</InputGroup>
		</Form>
	);
};

export default Search;
