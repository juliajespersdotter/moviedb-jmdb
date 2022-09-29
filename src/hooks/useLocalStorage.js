import { useState } from 'react'

const useLocalStorage = (key, defaultValue) => {
	const [storedValue, setStoredValue] = useState(() => {
		try {
			const item = localStorage.getItem(key)
			return item ? JSON.parse(item) : defaultValue
		} catch (error) {
			// If error also return initialValue
			console.log(error)
			return defaultValue
		}
	})

	// if (!storedValue.length) {
	// 	localStorage.setItem(key, JSON.stringify(defaultValue))
	// 	console.log('storedValue', storedValue)
	// }

	const setNewValue = value => {
		if (value) {
			localStorage.setItem(key, JSON.stringify(value))
			setStoredValue(value)
		}
	}

	return [storedValue, setNewValue]
}

export default useLocalStorage
