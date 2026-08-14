const convertBtn = document.getElementById("convertBtn");

convertBtn.addEventListener("click", convertTemperature);

function convertTemperature() {

    const input = document.getElementById("temperature").value;
    const unit = document.getElementById("unit").value;

    const error = document.getElementById("error");

    const celsiusOutput = document.getElementById("celsius");
    const fahrenheitOutput = document.getElementById("fahrenheit");
    const kelvinOutput = document.getElementById("kelvin");

    // Clear previous error
    error.textContent = "";

    // Check empty input
    if (input === "") {
        error.textContent = "Please enter a temperature.";
        return;
    }

    const value = Number(input);

    // Check valid number
    if (!Number.isFinite(value)) {
        error.textContent = "Please enter a valid number.";
        return;
    }

    let celsius;
    let fahrenheit;
    let kelvin;

    // Celsius input
    if (unit === "C") {

        celsius = value;

        if (celsius < -273.15) {
            error.textContent =
                "Temperature cannot be below -273.15°C.";
            return;
        }

        fahrenheit = (celsius * 9 / 5) + 32;

        kelvin = celsius + 273.15;
    }

    // Fahrenheit input
    else if (unit === "F") {

        fahrenheit = value;

        celsius = (fahrenheit - 32) * 5 / 9;

        if (celsius < -273.15) {
            error.textContent =
                "Temperature cannot be below absolute zero.";
            return;
        }

        kelvin = celsius + 273.15;
    }

    // Kelvin input
    else if (unit === "K") {

        kelvin = value;

        if (kelvin < 0) {
            error.textContent =
                "Kelvin cannot be less than 0 K.";
            return;
        }

        celsius = kelvin - 273.15;

        fahrenheit = (celsius * 9 / 5) + 32;
    }

    // Display results
    celsiusOutput.textContent =
        celsius.toFixed(2) + " °C";

    fahrenheitOutput.textContent =
        fahrenheit.toFixed(2) + " °F";

    kelvinOutput.textContent =
        kelvin.toFixed(2) + " K";
}