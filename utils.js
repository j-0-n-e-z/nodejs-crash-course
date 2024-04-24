/**
 * Generates a random number between 1 and 100 (inclusive).
 *
 * @return {number} The randomly generated number.
 */
function generateRandomNumber() {
	return Math.floor(Math.random() * 100) + 1
}

/**
 * Converts a temperature from Celsius to Fahrenheit.
 *
 * @param {number} celcius - The temperature in Celsius.
 * @return {number} The temperature in Fahrenheit.
 */
function celciusToFahrenheit(celcius) {
	return celcius * 1.8 + 32
}

module.exports = { generateRandomNumber, celciusToFahrenheit }
