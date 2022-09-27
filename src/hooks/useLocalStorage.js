import { useState } from 'react'

const useLocalStorage = (key, defaultValue) => {
	const [storedValue, setStoredValue] = useState(() =>
		localStorage.getItem(key)
			? JSON.parse(localStorage.getItem(key))
			: defaultValue
	)

	if (!storedValue) {
		localStorage.setItem(key, JSON.stringify(defaultValue))
		console.log('storedValue', storedValue)
	}

	const setNewValue = value => {
		if (value) {
			localStorage.setItem(key, JSON.stringify(value))
			setStoredValue(value)
		}
	}

	return [storedValue, setNewValue]
}

export default useLocalStorage
